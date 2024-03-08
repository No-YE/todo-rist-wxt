const host = import.meta.env.DEV ? 'http://localhost:3001' : 'https://todorist.com'

export default function() {
  return {
    host,        
  }
}

