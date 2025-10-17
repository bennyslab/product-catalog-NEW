# Product Catalog Structure Documentation

## Overview

The `catalog.json` file provides a comprehensive, customizable structure for managing product information. This structure supports easy addition and updating of products while enabling future expansion with rich metadata.

## File Structure

### Root Level

```json
{
  "version": "1.0.0",
  "lastUpdated": "ISO 8601 timestamp",
  "products": [...],
  "categories": [...],
  "metadata": {...}
}
```

- **version**: Schema version for tracking changes to the catalog structure
- **lastUpdated**: ISO 8601 timestamp of the last catalog update
- **products**: Array of product objects
- **categories**: Array of category definitions
- **metadata**: Store-level metadata and configuration

## Product Object Structure

Each product in the `products` array contains:

### Core Fields

- **id** (string, required): Unique identifier for the product
- **code** (string, required): Product code/SKU for ordering
- **name** (string, required): Product display name
- **shortDescription** (string): Brief product summary
- **description** (string): Detailed product description with usage information
- **price** (number, required): Base price of the product
- **currency** (string): Currency code (default: "USD")

### Specifications

```json
"specifications": {
  "concentration": "10mg per vial",
  "quantity": "10 vials",
  "form": "Lyophilized powder",
  "purity": ">98%"
}
```

Flexible object for product-specific technical details.

### Images

```json
"images": {
  "primary": "path/to/main/image.png",
  "thumbnail": "path/to/thumbnail.png",
  "gallery": ["path/to/image1.png", "path/to/image2.png"]
}
```

- **primary**: Main product image
- **thumbnail**: Smaller image for listings
- **gallery**: Array of additional product images

### Category and Tags

```json
"category": {
  "primary": "GLP-1 Agonists",
  "subcategory": "Weight Management",
  "tags": ["peptide", "glp-1", "research"]
}
```

Supports hierarchical categorization and flexible tagging for filtering.

### Availability

```json
"availability": {
  "inStock": true,
  "stockLevel": "high|medium|low",
  "estimatedShipping": "2-3 business days",
  "backorderAvailable": false
}
```

Real-time inventory and shipping information.

### Metadata

```json
"metadata": {
  "sku": "SM10-001",
  "barcode": "",
  "manufacturer": "",
  "countryOfOrigin": "",
  "weight": "50g",
  "dimensions": {
    "length": "10cm",
    "width": "8cm",
    "height": "5cm"
  },
  "warnings": [
    "For research use only",
    "Not for human consumption"
  ],
  "relatedProducts": ["TR10", "TR30"]
}
```

Extended product metadata including shipping dimensions, warnings, and related products.

### SEO

```json
"seo": {
  "metaTitle": "Product Title for Search Engines",
  "metaDescription": "Meta description for search results",
  "keywords": ["keyword1", "keyword2"]
}
```

Search engine optimization fields.

### Pricing

```json
"pricing": {
  "basePrice": 80.00,
  "bulkDiscounts": [
    {
      "quantity": 5,
      "discount": 0.10,
      "discountedPrice": 72.00
    }
  ],
  "taxable": true
}
```

Flexible pricing structure with bulk discount support.

### Reviews

```json
"reviews": {
  "averageRating": 4.5,
  "totalReviews": 23,
  "reviewsEnabled": true
}
```

Product review aggregation.

### Display and Status

- **displayOrder** (number): Order in which products appear in listings
- **featured** (boolean): Whether the product should be featured/highlighted
- **active** (boolean): Whether the product is currently active/visible
- **createdAt** (string): ISO 8601 timestamp of product creation
- **updatedAt** (string): ISO 8601 timestamp of last update

## Categories Structure

```json
"categories": [
  {
    "id": "category-id",
    "name": "Category Name",
    "description": "Category description",
    "parentCategory": null,
    "displayOrder": 1,
    "active": true
  }
]
```

Define product categories for organization and filtering.

## Store Metadata

```json
"metadata": {
  "storeName": "Product Catalog",
  "storeDescription": "Description of your store",
  "supportedCurrencies": ["USD"],
  "shippingRegions": ["US", "International"],
  "paymentMethods": ["credit_card", "cryptocurrency"]
}
```

Store-level configuration and capabilities.

## Adding New Products

To add a new product:

1. Copy the example product structure from `catalog.json`
2. Update all required fields (id, code, name, price)
3. Fill in optional fields as needed
4. Add to the `products` array
5. Update the `lastUpdated` timestamp

Example minimal product:

```json
{
  "id": "PRODUCT001",
  "code": "PRODUCT001",
  "name": "New Product",
  "shortDescription": "Brief description",
  "description": "Full product description",
  "price": 99.99,
  "currency": "USD",
  "specifications": {
    "quantity": "1 unit"
  },
  "images": {
    "primary": "images/product.png"
  },
  "category": {
    "primary": "Category Name",
    "tags": ["tag1", "tag2"]
  },
  "availability": {
    "inStock": true,
    "stockLevel": "medium"
  },
  "displayOrder": 100,
  "featured": false,
  "active": true,
  "createdAt": "2025-10-17T00:00:00.000Z",
  "updatedAt": "2025-10-17T00:00:00.000Z"
}
```

## Future Expansion

The structure is designed to be easily extensible. You can add:

- New fields to product objects
- Additional categories
- New metadata sections
- Custom attributes without breaking existing integrations

Always update the `version` field when making schema changes, and update `lastUpdated` timestamps when modifying data.

## Integration with index.html

To integrate this catalog with the existing `index.html`, you would need to:

1. Load the catalog.json file via JavaScript fetch/AJAX
2. Parse the products array
3. Map the new structure to the existing PRODUCTS format
4. Or update the rendering code to use the new structure directly

Example integration code:

```javascript
// Load catalog
fetch('catalog.json')
  .then(response => response.json())
  .then(catalog => {
    const PRODUCTS = catalog.products.map(product => ({
      code: product.code,
      name: product.name,
      spec: product.specifications.concentration + ' ' + product.specifications.quantity,
      price: product.price,
      img: product.images.primary
    }));
    // Continue with existing rendering logic
    renderProducts();
  });
```

## Validation

The catalog.json file should always be valid JSON. You can validate it using:

```bash
python3 -m json.tool catalog.json
```

Or using Node.js:

```bash
node -e "JSON.parse(require('fs').readFileSync('catalog.json', 'utf8'))"
```
