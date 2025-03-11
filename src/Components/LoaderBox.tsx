import { Spinner } from "react-bootstrap";
import { Theme } from "../../../models/utils";

interface Props {
    variant: Theme
}

const LoadingSpinner = ({ variant } : Props ) => {
    return (
        <div className="text-center">
            <Spinner animation="border" role="status" variant={variant}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
};

export default LoadingSpinner;