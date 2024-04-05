export default function Card({ data }) {
    const { productImage, name, description, discount, price, assuredImage, bottomText } = data;

    return (
        <div className="object-cover p-4 mx-auto transition-transform duration-300 transform bg-white rounded-lg shadow-md hover:scale-105 w-[200px]">
            <img src={productImage} alt="product" className="object-cover w-32 h-32 mr-4 rounded-lg" />
            <div className="flex flex-col justify-between">
                <div>
                    <p className="text-lg font-semibold text-gray-800">{name}</p>
                    <p className="text-gray-600">{description}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-gray-500">{discount}</p>
                    <p className="text-lg font-semibold">{price}</p>
                </div>
                <p className="mt-2 text-sm text-gray-600">{bottomText}</p>
            </div>
        </div>
    );
}
