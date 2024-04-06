export default function Card({ data }) {
    // Check if data is undefined, and provide a default value if it is
    if (!data) {
        return null; // or handle this case as needed
    }

    // Destructure properties from data with default values
    const { productImage, name, description, discount, price, assuredImage, bottomText } = data || {};

    return (
        <div className="p-4 transition-transform duration-300 transform bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105 w-[400px] h-[400px] flex flex-wrap object-cover ">
            <div className="relative">
                <img src={productImage} alt="product" className="object-cover w-full h-[200px] rounded-lg cursor-pointer" loading="lazy" />
                {assuredImage && <img src={assuredImage} alt="assured" className="absolute w-12 top-2 right-2" />}
            </div>
            <div className="flex flex-col justify-between mt-4">
                <div>
                    <p className="text-lg font-semibold text-gray-800">{name}</p>
                    <p className="text-gray-600">{description}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-gray-500">{discount}</p>
                    <p className="text-lg font-semibold">{price}</p>
                </div>
                <p className="mt-2 text-sm text-gray-600">{bottomText}</p>
            </div>
        </div>
    );
}
