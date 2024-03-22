import Link from "next/link";
import Image from "next/image";


const WishListAd = () => {

    return (
        <>
        <div className="flex flex-col p-2 mr-4 mt-2 mb-6 text-black items-center">
                      <div className="flex flex-col justify-center items-center">
                        <h1 className="pb-4 text-black text-2xl">Enhance Your Gift Exchange</h1>
                      <Image src="/assets/wishlist_image.png" alt="Gift Exchange" width={284} height={284} className="rounded-xl" />
                          <p className="pt-4 pb-4 text-sm font-light">
                          {/* Enhance your gift exchange experience by adding a wishlist to your account!  */}
                          Share your wishlist with friends to eliminate the guesswork and make gifting a breeze. 
                          Start creating your wishlist and make every gift exchange moment unforgettable!
                          </p>
                      </div>
                  <Link href="/wishlist" className="rounded-lg bg-white px-6 py-2 font-bold text-black text-center focus:outline-none">
                    Create Wishlist
                  </Link>
                    </div>
        </>
    )
}

export default WishListAd;
