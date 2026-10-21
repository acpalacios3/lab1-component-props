import type { ProductDisplayProps } from "../../types";

export default function ProductDisplay(props: ProductDisplayProps) {

    return (
        <div className="product-display">
            {props.product.imageUrl && (
                <img
                    src={props.product.imageUrl}
                    alt={props.product.name}
                />
            )}
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toFixed(2)}</p>

            {props.showDescription && (<p>{props.product.description}</p>)
            }

            {props.showStockStatus && (<p>{props.product.inStock}</p>)
            }
          
            {props.children}

            {props.onAddToCart && (<button 
                                   className="button"
                                   onClick={() => props.onAddToCart?.(props.product.id)}>

                Add to Cart
            </button>
            )}
        </div>

    );

}