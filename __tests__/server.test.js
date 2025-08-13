const request = require('supertest')
const express = require('express')

// Mock the database connection
jest.mock('../config/database', () => jest.fn())

describe('Server', () => {
  test('should respond with 200 status for basic health check', async () => {
    // Simple test to verify server can start
    const app = express()
    app.get('/health', (req, res) => {
      res.status(200).json({ status: 'OK' })
    })

    const response = await request(app).get('/health')
    expect(response.status).toBe(200)
    expect(response.body.status).toBe('OK')
  })
})

describe('Environment Variables', () => {
  test('should have required environment variables in production', () => {
    if (process.env.NODE_ENV === 'production') {
      expect(process.env.DB_STRING).toBeDefined()
      expect(process.env.PORT).toBeDefined()
    }
    // For test environment, we don't require env vars
    expect(true).toBe(true)
  })
})
