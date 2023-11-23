const matcherSize = {
  h1: 28,
  h2: 20,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 6,
};
const matcherFontWeight = {
  '100': '100',
  '200': '200',
  '300': '300',
  '400': '400',
  '500': '500',
  '600': '600',
  '700': '700',
  '800': '800',
  '900': '900',
};

function outputMatcher(fontSize?: string, fontWeight?: string) {
  const fs = fontSize as keyof typeof matcherSize;
  const fw = fontWeight as keyof typeof matcherFontWeight;

  return {
    fontSize: matcherSize[fs],
    fontWeight: matcherFontWeight[fw],
  };
}

export default outputMatcher;
