// Simple component loader for HTML templates
class ComponentLoader {
  static async loadComponent(componentName, targetSelector) {
    try {
      const response = await fetch(`components/${componentName}.html`)
      if (!response.ok) {
        throw new Error(`Failed to load component: ${componentName}`)
      }

      const html = await response.text()
      const targetElement = document.querySelector(targetSelector)

      if (targetElement) {
        targetElement.innerHTML = html
      } else {
        console.error(`Target selector not found: ${targetSelector}`)
      }
    } catch (error) {
      console.error(`Error loading component ${componentName}:`, error)
    }
  }

  static async loadComponents(components) {
    const promises = components.map(({ name, target }) =>
      this.loadComponent(name, target)
    )

    try {
      await Promise.all(promises)
      console.log('All components loaded successfully')
    } catch (error) {
      console.error('Error loading components:', error)
    }
  }
}

// Mobile menu toggle functionality
function initializeMobileMenu() {
  const mobileButton = document.querySelector('.mobile-menu-button')
  const mobileDropdown = document.querySelector('.mobile-dropdown')

  if (mobileButton && mobileDropdown) {
    mobileButton.addEventListener('click', () => {
      mobileDropdown.classList.toggle('show')
    })

    // Close dropdown when clicking on a link
    const dropdownLinks = mobileDropdown.querySelectorAll('a')
    dropdownLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDropdown.classList.remove('show')
      })
    })
  }
}

// Auto-load components when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  const components = [
    { name: 'navbar', target: '#navbar-placeholder' },
    { name: 'carousel', target: '#carousel-placeholder' },
    { name: 'about', target: '#about-placeholder' },
    { name: 'services', target: '#services-placeholder' },
  ]

  await ComponentLoader.loadComponents(components)

  // Initialize mobile menu after components are loaded
  initializeMobileMenu()
})
