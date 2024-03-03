import NewCollectionsCard from '../NewCollectionsCard/NewCollectionsCard';
import './NewCollections.css'
const NewCollection = () => {
    return (
        <div className="newCollection">
            <h2 className='text-2xl font-bold'>New Collections</h2>
            <p>Best New Gifts</p>

            <NewCollectionsCard/>
        </div>
    );
};

export default NewCollection;