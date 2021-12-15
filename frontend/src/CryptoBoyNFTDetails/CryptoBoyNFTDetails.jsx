import React, { Component } from "react";

class CryptoBoyNFTDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCryptoBoyPrice: "",
    };
  }

  callChangeTokenPriceFromApp = (tokenId, newPrice) => {
    this.props.changeTokenPrice(tokenId, newPrice);
  };

  // render(){
  //   return(
  //     <div>
  //       <h1>{this.props.assetName}</h1>
  //       <h1>{this.props.humidity}</h1>
  //       <h1>{this.props.image}</h1>
  //       <h1>{this.props.lat}</h1>
  //       <h1>{this.props.lon}</h1>
  //       <h1>{this.props.price}</h1>
  //     </div>
  //   )
  // }
  render() {
    return (
      <div className="mt-4">
      <img src="https://tse2.mm.bing.net/th?id=OIP.U88J_cJjZbfpEGjWI3si7QHaEK&pid=Api&P=0&w=275&h=155" class="img-fluid" alt="Responsive image"></img>
     
        <p>
          <span className="font-weight-bold">Asset Name</span> :{" "}
          {this.props.assetName}
        </p>
        <p>
          <span className="font-weight-bold">Latitude</span> :{" "}
          {this.props.lat}
        </p>
        <p>
          <span className="font-weight-bold">Longitude</span> :{" "}
          {this.props.lon}
        </p>
        <p>
          <span className="font-weight-bold">Price</span> :{" "}
          {this.props.price}{" "} Ξ
        </p> 
        <p>
          <span className="font-weight-bold">Humidity</span> :{" "}
          {this.props.humidity}
        </p>
        <p>
          <span className="font-weight-bold">Light</span> :{" "}
          {this.props.light}
        </p>
        <p>
          <span className="font-weight-bold">Pressure</span> :{" "}
          {this.props.pressure}
        </p>
        <p>
          <span className="font-weight-bold">Rating</span> :{" "}
          {this.props.rating}
        </p>
        <p>
          <span className="font-weight-bold">Temperature</span> :{" "}
          {this.props.temperature}
        </p>
        {/* <p>
          <span className="font-weight-bold">Price</span> :{" "}
          {window.web3.utils.fromWei(
            this.props.price.toString(),
            "Ether"
          )}{" "}
          Ξ
        </p> */}
       
        {/* <div>
          {this.props.accountAddress === this.props.cryptoboy.currentOwner ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.callChangeTokenPriceFromApp(
                  this.props.cryptoboy.tokenId.toNumber(),
                  this.state.newCryptoBoyPrice
                );
              }}
            >
              <div className="form-group mt-4 ">
                <label htmlFor="newCryptoBoyPrice">
                  <span className="font-weight-bold">Change Token Price</span> :
                </label>{" "}
                <input
                  required
                  type="number"
                  name="newCryptoBoyPrice"
                  id="newCryptoBoyPrice"
                  value={this.state.newCryptoBoyPrice}
                  className="form-control w-50"
                  placeholder="Enter new price"
                  onChange={(e) =>
                    this.setState({
                      newCryptoBoyPrice: e.target.value,
                    })
                  }
                />
              </div>
              <button
                type="submit"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                className="btn btn-outline-info mt-0 w-50"
              >
                change price
              </button>
            </form>
          ) : null}
        </div> */}
        {/* <div>
          {this.props.accountAddress === this.props.cryptoboy.currentOwner ? (
            this.props.cryptoboy.forSale ? (
              <button
                className="btn btn-outline-danger mt-4 w-50"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                onClick={() =>
                  this.props.toggleForSale(
                    this.props.cryptoboy.tokenId.toNumber()
                  )
                }
              >
                Remove from sale
              </button>
            ) : (
              <button
                className="btn btn-outline-success mt-4 w-50"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                onClick={() =>
                  this.props.toggleForSale(
                    this.props.cryptoboy.tokenId.toNumber()
                  )
                }
              >
                Keep for sale
              </button>
            )
          ) : null}
        </div> */}
        <div>
              <button
                className="btn btn-outline-primary mt-3 w-50"
                value={this.props.price}
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
               
              >
                Buy For{" "}
                {this.props.price}{" "}
                Ξ
              </button>
      </div>
      </div>
    );
  }
}

export default CryptoBoyNFTDetails;