// Generate meta description
export const generateMetaDescription = (text, maxLength = 160) => {
  if (text.length <= maxLength) return text;
  
  const truncated = text.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return truncated.substring(0, lastSpace) + '...';
};

// Generate keywords from text
export const extractKeywords = (text, maxKeywords = 10) => {
  const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'up', 'about', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'between', 'among', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those', 'a', 'an'];
  
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3 && !commonWords.includes(word));
  
  const wordCount = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  
  return Object.entries(wordCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
};

// Create canonical URL
export const createCanonicalUrl = (path) => {
  const baseUrl = 'https://labelladder.com';
  const cleanPath = path.split('?')[0].replace(/\/$/, '');
  return `${baseUrl}${cleanPath}`;
};

// Validate structured data
export const validateStructuredData = (data) => {
  try {
    JSON.parse(JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Invalid structured data:', error);
    return false;
  }
};

// Generate Open Graph imgs URL
export const createOGImageUrl = (title, subtitle = '') => {
  const baseUrl = 'https://labelladder.com/api/og';
  const params = new URLSearchParams({
    title: title.substring(0, 100),
    ...(subtitle && { subtitle: subtitle.substring(0, 150) })
  });
  
  return `${baseUrl}?${params.toString()}`;
};