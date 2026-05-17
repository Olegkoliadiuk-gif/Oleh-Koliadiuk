// ?? returns the first DEFINED value (ignores null/undefined)
// || returns the first TRUTHY value (ignores 0, "", false, null, undefined)

let height = 0;
alert(height || 100) // 100 (0 - falsy)
alert(height ?? 100) // 0 (0 is defined)

// Precedence: Always use brackets when mixing operations
let w = null
let area = (height ?? 100) * (w ?? 50); // 0 * 50 = 0