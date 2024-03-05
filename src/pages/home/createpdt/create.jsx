import AddProduct from "../../../components/createProduct";
import Navbar from "../../../components/navbar";
import './create.css';
const CreatePdt = () => {

    return (
        <div className="addContainer">
            <Navbar />
            <AddProduct />
        </div>
    )
}
export default CreatePdt;