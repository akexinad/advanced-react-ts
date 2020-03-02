import React, { Props, ComponentType, Component } from "react";
import axios, { AxiosInstance, AxiosError } from "axios";

import Aux from "../Auxilliary/Auxilliary";
import Modal from "../../components/UI/Modal/Modal";

interface ErrorState {
    isError: boolean;
    errorMsg: AxiosError["message"];
}

const WithErrorHandler = (
    WrappedComponent: ComponentType,
    axios: AxiosInstance
) => {
    return class extends Component<Component["props"], ErrorState> {
        state = {
            isError: false,
            errorMsg: ""
        };

        componentDidMount = () => {
            axios.interceptors.request.use(req => {
                this.setState({
                    isError: false,
                    errorMsg: ""
                });

                return req;
            });

            axios.interceptors.response.use(undefined, (error: AxiosError) => {
                this.setState({
                    isError: true,
                    errorMsg: error.message
                });

                return;
            });
        };

        render() {
            return (
                <Aux>
                    <Modal show={this.state.isError} modalClosed={() => true}>
                        THERE WAS ERROR!
                        {this.state.errorMsg}
                        <WrappedComponent {...this.props} />
                    </Modal>
                </Aux>
            );
        }
    };
};
// (props: Props<ComponentType["propTypes"]>) => {
//     return (
//         <Aux>
//             <Modal>
//                 THERE WAS ERROR!
//                 <WrappedComponent {...props} />
//             </Modal>
//         </Aux>
//     );
// };

export default WithErrorHandler;
