import React, { ComponentType, Component } from "react";
import { AxiosInstance, AxiosError } from "axios";

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

        constructor(props: Component["props"]) {
            super(props);

            axios.interceptors.request.use(req => {
                console.log(req);

                this.setState({
                    isError: false,
                    errorMsg: ""
                });

                return req;
            });

            axios.interceptors.response.use(
                res => res,
                (error: AxiosError) => {
                    this.setState({
                        isError: true,
                        errorMsg: error.message
                    });
                }
            );
        }

        state = {
            isError: false,
            errorMsg: ""
        };

        _errorConfirmed = () => {
            this.setState({
                isError: false
            });
        };

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.isError}
                        modalClosed={this._errorConfirmed}
                    >
                        {this.state.isError ? this.state.errorMsg : "no error"}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    };
};

export default WithErrorHandler;
