import { describe, expect, it } from 'vitest';
import { productImageUrl } from './product.model';

describe('productImageUrl', () => {
  it('builds a default-sized seeded image url', () => {
    expect(productImageUrl('cart-list-0')).toBe(
      'https://picsum.photos/seed/cart-list-0/300/200',
    );
  });

  it('encodes the seed and honours custom dimensions', () => {
    expect(productImageUrl('a b', 64, 48)).toBe(
      'https://picsum.photos/seed/a%20b/64/48',
    );
  });
});
