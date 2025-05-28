const JsonLd = ({ data }) => {
  if (!data) return null;

  // Проверяем, что это валидный JSON
  try {
    JSON.stringify(data);
  } catch (error) {
    console.error('Invalid JSON-LD data:', error);
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;