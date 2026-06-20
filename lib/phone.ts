export function formatGhanaPhone(input: string): string {
  const digits = (input || '').replace(/\D+/g, '');
  let local = digits;
  
  // Remove leading 233 if user pastes with country code
  if (local.startsWith('233')) {
    local = local.slice(3);
  }
  
  // Allow leading 0 - don't strip it for display, but handle it in unformatGhanaPhone
  // Cap to 10 digits to allow typing 0XXXXXXXXX (10 digits) or XXXXXXXXX (9 digits)
  local = local.slice(0, 10);

  const part1 = local.slice(0, 3);
  const part2 = local.slice(3, 6);
  const part3 = local.slice(6, 10); // Allow up to 10 digits for display

  // Always keep the +233 prefix visible
  let out = '+233';
  if (part1.length) out += ` (${part1}`;
  if (part1.length === 3) out += ')';
  if (part2.length) out += ` ${part2}`;
  if (part3.length) out += `-${part3}`;

  // Ensure there is a trailing space after +233 when no local digits yet
  if (!part1.length) return out + ' ';
  return out;
}

export function unformatGhanaPhone(formatted: string): string {
  // Returns digits only including country code 233
  // E.164 format: 233 + exactly 9 digits
  const digits = (formatted || '').replace(/\D+/g, '');
  let local = digits;
  
  // If it starts with 233, extract the local part
  if (local.startsWith('233')) {
    local = local.slice(3);
  }
  
  // Handle numbers starting with 0 (like 0905756088 or 0233684756)
  // Remove leading 0 to get the 9-digit number
  if (local.startsWith('0')) {
    local = local.slice(1);
  }
  
  // Take only the first 9 digits (Ghana mobile numbers are 9 digits)
  local = local.slice(0, 9);
  
  // Ensure we have exactly 9 digits
  if (local.length < 9) {
    // If we don't have 9 digits, this is invalid
    // Return as-is and let backend validation handle it
    return local.length > 0 ? `233${local}` : '';
  }
  
  // Return in E.164 format: 233 + 9 digits
  return `233${local}`;
}

export function extractLocalDigits(formattedOrRaw: string): string {
  const digits = (formattedOrRaw || '').replace(/\D+/g, '');
  let local = digits;
  if (local.startsWith('233')) local = local.slice(3);
  // Allow 0 in the input for display, but we'll handle it in unformatGhanaPhone
  // For display purposes, allow up to 10 digits (0XXXXXXXXX)
  return local.slice(0, 10);
}

// Use this in input onChange to keep +233, allow deleting when backspacing on mask chars
export function handleGhanaPhoneChange(previousFormatted: string, inputText: string): string {
  const prevLocal = extractLocalDigits(previousFormatted);
  // First pass: normal formatting of what user typed
  let next = formatGhanaPhone(inputText);

  // If the formatted output didn't change but the user reduced the length,
  // they likely deleted a mask character like ')' or ' '. Remove a digit instead.
  const deletedChar = inputText.length < previousFormatted.length;
  if (deletedChar && next === previousFormatted && prevLocal.length > 0) {
    const reducedLocal = prevLocal.slice(0, prevLocal.length - 1);
    next = formatGhanaPhone('+233' + reducedLocal);
  }

  return next;
}
