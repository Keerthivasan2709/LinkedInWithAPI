import React from "react";
import { useNavigation } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 className="black" style={{ fontWeight: "100" }}>
            Something went wrong.
          </h1>
          <h2 className="black" style={{ fontWeight: "100", marginTop: "8px" }}>
            We are working on it.
          </h2>
          <button
            style={{
              border: "1px solid #0073b1",
              background: "transparent",
              color: "#0073b1",
              padding: "7px 10px",
              fontSize: "16px",
              marginTop: "8px",
            }}
          >
            Go to Feed
          </button>
          <img
            src="https://res.cloudinary.com/dibccigcp/image/upload/v1668440140/bpw4x301sj2509tdlfz1oojut_qfplun.svg"
            style={{ width: "340px" }}
          />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
