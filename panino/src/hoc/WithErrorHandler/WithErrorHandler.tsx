import React, { Component, ReactNode, ReactType, ClassAttributes, ComponentType } from "react";
import { AxiosInstance, AxiosError } from "axios";

import Aux from "../Auxilliary/Auxilliary";
import Modal from "../../components/UI/Modal/Modal";
import { RouteComponentProps } from "react-router-dom";
import { Matching } from "react-redux";
import { IIngredients, IInjectedProps } from "../../interfaces";

interface ErrorState {
    isError: boolean;
    errorMsg: AxiosError["message"];
}

interface WrappedComponentProps extends RouteComponentProps {
    children?: ReactNode;
}

const WithErrorHandler: any = (
    WrappedComponent: ReactType,
    axios: AxiosInstance
) => {
    return class extends Component<ReactType<WrappedComponentProps>, ErrorState> {
        private reqInterceptor: number;
        private resInterceptor: number;

        constructor(props: ReactType<WrappedComponentProps>) {
            super(props);

            const reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    isError: false,
                    errorMsg: ""
                });

                return req;
            });

            const resInterceptor = axios.interceptors.response.use(
                res => res,
                (error: AxiosError) => {
                    this.setState({
                        isError: true,
                        errorMsg: error.message
                    });
                }
            );

            this.reqInterceptor = reqInterceptor;
            this.resInterceptor = resInterceptor;
        }

        componentWillUnmount = () => {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        };

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
                        {this.state.isError ? this.state.errorMsg : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    };
};

export default WithErrorHandler;
