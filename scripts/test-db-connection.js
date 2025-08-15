#!/usr/bin/env node
/**
 * Test Database Connection Script
 * 
 * This script tests your MongoDB connection using the same logic as your app.
 * Usage: node scripts/test-db-connection.js
 */

const mongoose = require('mongoose')
require('dotenv').config({ path: './config/.env' })

async function testConnection() {
  try {
    console.log('🔍 Testing database connection...')
    console.log('📍 Environment:', process.env.NODE_ENV || 'development')
    
    // Use the same logic as your app
    const mongoUrl = process.env.MONGO_URL || process.env.DB_STRING
    
    if (!mongoUrl) {
      throw new Error('❌ No MongoDB connection string found!')
    }
    
    console.log('🔗 Connection string found:', mongoUrl.replace(/\/\/[^:]+:[^@]+@/, '//***:***@'))
    
    console.log('⏳ Attempting to connect...')
    const conn = await mongoose.connect(mongoUrl, {
      connectTimeoutMS: 10000,
      serverSelectionTimeoutMS: 10000
    })
    
    console.log('✅ MongoDB Connected successfully!')
    console.log('🏠 Host:', conn.connection.host)
    console.log('🗄️  Database:', conn.connection.name)
    console.log('📡 Port:', conn.connection.port)
    console.log('🔌 Ready state:', conn.connection.readyState === 1 ? 'Connected' : 'Not connected')
    
    // Test a simple operation
    const testCollection = conn.connection.db.collection('connection_test')
    await testCollection.insertOne({ test: true, timestamp: new Date() })
    console.log('✅ Write test successful!')
    
    const testDoc = await testCollection.findOne({ test: true })
    console.log('✅ Read test successful!')
    
    // Clean up test document
    await testCollection.deleteOne({ test: true })
    console.log('✅ Cleanup successful!')
    
  } catch (error) {
    console.error('❌ Database connection failed:')
    console.error('Error type:', error.constructor.name)
    console.error('Error message:', error.message)
    
    if (error.code) {
      console.error('Error code:', error.code)
    }
    
    if (error.reason) {
      console.error('Reason:', error.reason)
    }
    
    // Specific MongoDB error troubleshooting
    if (error.message.includes('ENOTFOUND')) {
      console.error('\n💡 Troubleshooting tips:')
      console.error('- Check if MONGO_URL or DB_STRING is correctly set')
      console.error('- Verify the hostname in your connection string')
      console.error('- Ensure your network can reach the MongoDB server')
    }
    
    if (error.message.includes('authentication failed')) {
      console.error('\n💡 Troubleshooting tips:')
      console.error('- Check username and password in connection string')
      console.error('- Verify database user permissions')
    }
    
    if (error.message.includes('connection') && error.message.includes('closed')) {
      console.error('\n💡 Troubleshooting tips:')
      console.error('- MongoDB server may be down or unreachable')
      console.error('- Check firewall settings')
      console.error('- Verify connection string format')
    }
    
    process.exit(1)
  } finally {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close()
      console.log('🔌 Connection closed.')
    }
  }
}

// Run the test
testConnection()
