import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1, h2').first()).toBeVisible()
    // Stats should be present
    await expect(page.getByText('1,200')).toBeVisible()
    await expect(page.getByText('98%')).toBeVisible()
  })

  test('navigation links are present', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: /listings/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /agents/i }).first()).toBeVisible()
  })
})

test.describe('Listings', () => {
  test('listing page shows property cards', async ({ page }) => {
    await page.goto('/listings')
    await expect(page).toHaveTitle(/Listings|Real Estate/i)
    await expect(page.getByText('Charming Craftsman Bungalow')).toBeVisible()
    await expect(page.getByText('Modern Lakefront Condominium')).toBeVisible()
  })

  test('listing detail page loads', async ({ page }) => {
    await page.goto('/listings/craftsman-bungalow-oak-park')
    await expect(page.getByText('Charming Craftsman Bungalow')).toBeVisible()
    await expect(page.getByText('Price')).toBeVisible()
  })
})

test.describe('Agents', () => {
  test('agents page shows agent cards', async ({ page }) => {
    await page.goto('/agents')
    await expect(page.getByText('Rachel Morgan')).toBeVisible()
    await expect(page.getByText('Tom Delgado')).toBeVisible()
  })

  test('agent detail page loads', async ({ page }) => {
    await page.goto('/agents/rachel-morgan')
    await expect(page.getByText('Rachel Morgan')).toBeVisible()
  })
})

test.describe('Neighborhoods', () => {
  test('neighborhoods page shows neighborhood cards', async ({ page }) => {
    await page.goto('/neighborhoods')
    await expect(page.getByRole('heading', { name: 'Downtown' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Oak Park' })).toBeVisible()
  })

  test('neighborhood detail page loads', async ({ page }) => {
    await page.goto('/neighborhoods/downtown')
    await expect(page.getByRole('heading', { name: 'Downtown' })).toBeVisible()
  })
})

test.describe('Blog', () => {
  test('blog page shows posts', async ({ page }) => {
    await page.goto('/blog')
    await expect(page.getByText('Spring 2026 Housing Market Outlook')).toBeVisible()
  })

  test('blog detail page loads', async ({ page }) => {
    await page.goto('/blog/spring-market-outlook')
    await expect(page.getByText('Spring 2026 Housing Market Outlook')).toBeVisible()
  })
})

test.describe('Static pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page).toHaveTitle(/About|Crestview/i)
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    expect(page.url()).toContain('/contact')
  })
})
