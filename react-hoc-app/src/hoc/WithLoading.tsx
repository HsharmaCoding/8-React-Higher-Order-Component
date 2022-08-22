import React from "react";

interface IProps {
    loading: boolean;
}
export const WithLoading = <P extends object>(Component: React.ComponentType<P>) =>
    class WithLoading extends React.Component<P & IProps> {
        render() {
            const { loading, ...props } = this.props;
            return (
                <>
                   {loading ?
                        <div>
                            <h1>Loading..........</h1>
                        </div> :
                        <Component {...props as P} />
                    }
                </>
            )
        }
    };