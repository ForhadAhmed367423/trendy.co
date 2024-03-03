import CollectionCardSwiper from './CollectionCardSwiper';
import './NewCollectionsCard.css'
const NewCollectionsCard = () => {
    return (
        <div className='collections'>
            <div className='collectionsCard grid grid-cols-2 gap-1 '>
                <div className='caard'>
                    <img src="https://i.ibb.co/Y74yxt5/fc2e0d2e-3f70-4dd9-8a74-b4cc5cf8883c.png" alt="" />
                </div>
                <div className='caard'>
                    <img src="https://i.ibb.co/rfGrVC4/c405d009-526f-4e20-93f0-5bc1e8826043.png" alt="" />
                </div>
                <div className='caard'> 
                    <img src="https://i.ibb.co/qB2K205/91442ae2-a16c-4749-9d74-3f76cf9f91c7.png" alt="" />
                </div >
                <div className='caard'>
                    <img src="https://i.ibb.co/Yhn4pMV/12361e83-721c-4e13-9ac6-9a087af09d6b.png" alt="" />
                </div>
            </div>

            <div className='card-swiper'>
                <CollectionCardSwiper/>
            </div>
        </div>
    );
};

export default NewCollectionsCard;