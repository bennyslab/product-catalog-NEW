# Example: Adding More Products to catalog.json

This file shows examples of how to add different types of products to the catalog.

## Example 1: Minimal Product Entry

The absolute minimum required fields for a product:

```json
{
  "id": "SIMPLE01",
  "code": "SIMPLE01",
  "name": "Simple Product",
  "description": "A basic product with minimal information",
  "price": 49.99,
  "currency": "USD",
  "specifications": {
    "quantity": "1 unit"
  },
  "images": {
    "primary": "images/simple-product.png"
  },
  "category": {
    "primary": "General"
  },
  "availability": {
    "inStock": true
  },
  "displayOrder": 100,
  "active": true,
  "createdAt": "2025-10-17T00:00:00.000Z",
  "updatedAt": "2025-10-17T00:00:00.000Z"
}
```

## Example 2: Product with Detailed Information

A fully populated product with all available fields:

```json
{
  "id": "TR10",
  "code": "TR10",
  "name": "Tirzepatide",
  "shortDescription": "Dual GIP/GLP-1 receptor agonist peptide",
  "description": "Tirzepatide is a novel dual glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptor agonist. This product is intended for research and laboratory use only. Each vial contains 10mg of tirzepatide in lyophilized powder form.",
  "price": 90.00,
  "currency": "USD",
  "specifications": {
    "concentration": "10mg per vial",
    "quantity": "10 vials",
    "form": "Lyophilized powder",
    "purity": ">98%",
    "storage": "Store at -20°C"
  },
  "images": {
    "primary": "images/tirzepatide.png",
    "thumbnail": "images/tirzepatide-thumb.png",
    "gallery": [
      "images/tirzepatide.png",
      "images/tirzepatide-vial.png",
      "images/tirzepatide-packaging.png"
    ]
  },
  "category": {
    "primary": "GLP-1 Agonists",
    "subcategory": "Weight Management",
    "tags": [
      "peptide",
      "glp-1",
      "gip",
      "dual-agonist",
      "research",
      "tirzepatide"
    ]
  },
  "availability": {
    "inStock": true,
    "stockLevel": "medium",
    "estimatedShipping": "2-3 business days",
    "backorderAvailable": true
  },
  "metadata": {
    "sku": "TR10-001",
    "barcode": "1234567890123",
    "manufacturer": "Research Labs Inc.",
    "countryOfOrigin": "USA",
    "weight": "50g",
    "dimensions": {
      "length": "10cm",
      "width": "8cm",
      "height": "5cm"
    },
    "warnings": [
      "For research use only",
      "Not for human consumption",
      "Store at -20°C before reconstitution",
      "Use within 30 days after reconstitution"
    ],
    "relatedProducts": [
      "SM10",
      "TR30",
      "RT10"
    ]
  },
  "seo": {
    "metaTitle": "Tirzepatide 10mg x 10 Vials - Dual GIP/GLP-1 Agonist",
    "metaDescription": "High-quality Tirzepatide peptide for research purposes. Dual GIP/GLP-1 receptor agonist. 10mg per vial, pack of 10.",
    "keywords": [
      "tirzepatide",
      "glp-1",
      "gip",
      "dual agonist",
      "peptide",
      "research"
    ]
  },
  "pricing": {
    "basePrice": 90.00,
    "bulkDiscounts": [
      {
        "quantity": 3,
        "discount": 0.05,
        "discountedPrice": 85.50
      },
      {
        "quantity": 5,
        "discount": 0.10,
        "discountedPrice": 81.00
      },
      {
        "quantity": 10,
        "discount": 0.15,
        "discountedPrice": 76.50
      }
    ],
    "taxable": true
  },
  "reviews": {
    "averageRating": 4.8,
    "totalReviews": 15,
    "reviewsEnabled": true
  },
  "displayOrder": 2,
  "featured": true,
  "active": true,
  "createdAt": "2025-10-17T00:00:00.000Z",
  "updatedAt": "2025-10-17T02:40:34.712Z"
}
```

## Example 3: Product with Multiple Variants

For products that come in different sizes or concentrations:

```json
{
  "id": "HGH36",
  "code": "H36",
  "name": "HGH",
  "shortDescription": "Human Growth Hormone - 36iu variant",
  "description": "Human Growth Hormone (HGH) research peptide. Higher concentration variant with 36iu per vial. For research and laboratory use only.",
  "price": 150.00,
  "currency": "USD",
  "specifications": {
    "concentration": "36iu per vial",
    "quantity": "10 vials",
    "form": "Lyophilized powder",
    "purity": ">98%"
  },
  "images": {
    "primary": "images/hgh-36.png"
  },
  "category": {
    "primary": "Growth Factors",
    "subcategory": "Growth Hormone",
    "tags": [
      "hgh",
      "growth-hormone",
      "peptide",
      "research"
    ]
  },
  "availability": {
    "inStock": true,
    "stockLevel": "high"
  },
  "metadata": {
    "sku": "HGH36-001",
    "relatedProducts": [
      "H10",
      "TSM10",
      "SMO10"
    ],
    "variants": [
      {
        "id": "H10",
        "name": "HGH 10iu",
        "concentration": "10iu per vial",
        "price": 55.00
      },
      {
        "id": "H36",
        "name": "HGH 36iu",
        "concentration": "36iu per vial",
        "price": 150.00
      }
    ]
  },
  "displayOrder": 12,
  "featured": false,
  "active": true,
  "createdAt": "2025-10-17T00:00:00.000Z",
  "updatedAt": "2025-10-17T02:40:34.712Z"
}
```

## Quick Reference: Required vs Optional Fields

### Required Fields
- `id` - Unique identifier
- `code` - Product code
- `name` - Product name
- `price` - Product price
- `active` - Whether product is active

### Highly Recommended Fields
- `description` - Product description
- `currency` - Price currency
- `specifications.quantity` - What the customer gets
- `images.primary` - Product image
- `category.primary` - Product category
- `availability.inStock` - Stock status
- `displayOrder` - Display order in listings

### Optional Fields
All other fields are optional and can be added as needed:
- `shortDescription`
- `specifications.*` (additional spec fields)
- `images.thumbnail`, `images.gallery`
- `category.subcategory`, `category.tags`
- `availability.stockLevel`, `availability.estimatedShipping`
- `metadata.*` (all metadata fields)
- `seo.*` (all SEO fields)
- `pricing.bulkDiscounts`
- `reviews.*`
- `featured`

## Tips for Adding Products

1. **Start Simple**: Begin with required and recommended fields
2. **Copy and Modify**: Copy an existing product and update the values
3. **Validate JSON**: Always validate your JSON after making changes
4. **Use Consistent IDs**: Keep ID and code format consistent
5. **Update Timestamps**: Set `createdAt` when adding, update `updatedAt` when modifying
6. **Test Images**: Ensure image paths are correct
7. **Set Display Order**: Use displayOrder to control product sequence
8. **Add Tags**: Use tags for better filtering and search
9. **Link Related Products**: Use `metadata.relatedProducts` for cross-selling

## Batch Adding Products

When adding multiple products at once, you can use this template:

```json
{
  "version": "1.0.0",
  "lastUpdated": "2025-10-17T02:40:34.712Z",
  "products": [
    { /* Product 1 */ },
    { /* Product 2 */ },
    { /* Product 3 */ }
  ]
}
```

Remember to:
- Add commas between products
- Update the `lastUpdated` timestamp
- Validate the entire JSON file after changes
