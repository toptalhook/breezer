import React, { Component } from "react";
import Web3 from "web3";
import Market from "../abis/Market.json";




class MedicalNFTDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCryptoBoyPrice: "",
      getRating: null,
    };
  }

 /*  getRating = () => {
    console.log(this.props.pressure);

    let pressure_mean = 25;
    let TEMPERATURE_mean = 22;
    let HUMIDITY_mean = 30;
    let light_mean = 40;

    let rating =
      this.props.pressure -
      pressure_mean +
      (this.props.temperature - TEMPERATURE_mean) +
      (this.props.humidity - HUMIDITY_mean) +
      (this.props.light - light_mean);

    if (rating > 0) {
      rating += 2.5;
    } else if (rating <= 0) {
      rating -= 2.5;
    }

    console.log(rating);
  }; */

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
    let url = "https://ipfs.io/ipfs/"+this.props.image;
    let liink = this.props.link;
    return (
      <div className="mt-4">
        <img
          src={url}
          class="img-fluid"
          alt="Responsive image"
          style={{ width: "100%", height: "300px" }}
        ></img>
        <p>
          <span className="font-weight-bold">TokenId</span> :{" "}
          {this.props.tokenId}
        </p>
        <p>
          <span className="font-weight-bold">Medical Name</span> :{" "}
          {this.props.assetName}
        </p>
        {/* <p>
          <span className="font-weight-bold">Timestamp</span> :{" "}
          {this.props.timestamp}
        </p> */}
        <p>
          <span className="font-weight-bold">Location</span> : {this.props.lat}{" "}
          , {this.props.lon}
        </p>
        <p>
          <span className="font-weight-bold">Distance from store</span> :{" "}
          {this.props.distance} Miles
        </p>
        <p>
          <span className="font-weight-bold">Storage Humidity</span> :{" "}
          {this.props.humidity}
        </p> 
        <p>
          <span className="font-weight-bold">Light Intensity</span> : {this.props.light}
        </p>
        <p>
          <span className="font-weight-bold">Pressure</span> :{" "}
          {this.props.pressure}
        </p>
        <p>
          <span className="font-weight-bold">Storage Temperature</span> :{" "}
          {this.props.temperature}°C
        </p>
        <p>
          <span className="font-weight-bold">Manufacture Timestamp</span> :{" "}
          {this.props.timestamp}
        </p>
        <p>
          <span className="font-weight-bold">Rating</span> : {this.props.rating}
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
           
            style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
            onClick={() =>
              this.props.buyCrop(this.props.tokenId, this.props.price)
            }
          >
            Buy Now For Ξ {this.props.price} 
          </button>
        
        </div>
      </div>
    );
  }
}

export default MedicalNFTDetails;
