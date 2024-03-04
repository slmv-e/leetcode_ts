function isValid(inputString: string): boolean {
  type OpenBracket = '(' | '{' | '['
  type CloseBracket = ')' | '}' | ']'

  const closeBracketsPairs: Record<CloseBracket, OpenBracket> = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  const stack: OpenBracket[] = []

  for (const bracket of inputString) {
    if (bracket in closeBracketsPairs) {
      const openBracket = closeBracketsPairs[bracket as CloseBracket]

      if (stack.pop() !== openBracket) {
        return false
      }
    } else {
      stack.push(bracket as OpenBracket)
    }
  }

  return stack.length === 0
}
