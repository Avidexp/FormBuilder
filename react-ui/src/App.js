import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
class App extends Component {

  sendToESB(){
    
    var ShipperName = this.refs.shipperShipperName.value;
    var ShipperAddress1 = this.refs.shipperAddress.value;
    var ShipperAddress2 = this.refs.shipperAddress2.value;
    var ShipperCity = this.refs.shipperCity.value;
    var ShipperState = this.refs.shipperState.value;
    var ShipperZip = this.refs.shipperZip.value;
    var shipperCountry = this.refs.shipperCountry.value;
    var ShipperAttention = this.refs.shipperAttention.value;

    var ConsigneeShipperName = this.refs.consigneeShipperName.value;
    var ConsigneeAddress = this.refs.consigneeAddress.value; 
    var ConsigneeAddress2 = this.refs.consigneeAddress2.value; 
    var ConsigneeCity = this.refs.consigneeCity.value;
    var ConsigneeState = this.refs.consigneeState.value;
    var ConsigneeZip = this.refs.consigneeZip.value;
    var ConsigneeCountry = this.refs.consigneeCountry.value;
    var ConsigneeAttention = this.refs.consigneeAttention.value; 


    var BilltoShipperName = this.refs.billtoShipperName.value;
    var BilltoAddress = this.refs.billtoAddress.value; 
    var BilltoAddress2 = this.refs.billtoAddress2.value; 
    var BilltoCity = this.refs.billtoCity.value;
    var BilltoState = this.refs.billtoState.value; 
    var BilltoZip = this.refs.billtoZip.value;
    var BilltoCountry = this.refs.billtoCountry.value; 
    var BilltoAttention = this.refs.billtoAttention.value; 


    var ShipmentInfoShipperReference = this.refs.shipinfoShipperReference.value;
    var ShipmentInfoConsigneeReference = this.refs.shipinfoConsigneeReference.value; 
    var ShipInfoShipDate = this.refs.shipinfoShipDate.value; 
    var ShipInfoStatus = this.refs.shipinfoStatus.value; 
    var ShipInfoPickupReadyTime = this.refs.shipinfoPickupReadyTime.value;
    var ShipInfoPickupCloseTime = this.refs.shipinfoPickupCloseTime.value;
    var ShipInfoPodName = this.refs.shipinfoPodName.value;
    var ShipInfoPodDate = this.refs.shipinfoPodDate.value;
    var ShipInfoPodTime = this.refs.shipinfoPodTime.value;
    var ShipInfoServiceCode = this.refs.shipinfoServiceCode.value;
    var ShipInfoPieces = this.refs.shipinfoPieces.value; 
    var shipinfoCalledInWeight = this.refs.shipinfoCalledInWeight.value; 
    var ShipInfoReweight = this.refs.shipinfoReweight.value;
    var ShipInfoDimWeight = this.refs.shipinfoDimWeight.value;
    var ShipInfoDimFactor = this.refs.shipinfoDimFactor.value; 
    var shipinfoChargeableWeight = this.refs.shipinfoChargeableWeight.value;
    var shipinfoMeasurementUnit = this.refs.shipinfoMeasurementUnit.value; 
    var shipinfoCommodityCode = this.refs.shipinfoCommodityCode.value;
    var shipinfoDelInstructions = this.refs.shipinfoDelInstructions.value;
    var ShipInfoPUInstructions = this.refs.shipinfoPUInstructions.value;
    var ShipInfoDVInsAmount = this.refs.shipinfoDVInsAmount.value;
    var ShipInfoDVInstType = this.refs.shipinfoDVInsType.value;
    var ShipInfoTotalCost = this.refs.shipinfoTotalCost.value; 
    var ShipInfoRate = this.refs.shipinfoRate.value;
    var ShipInfoRateTotal = this.refs.shipinfoRateTotal.value; 
    var ShipInfoTotalRevenue = this.refs.shipinfoTotalRevenue.value; 
    var ShipInfoPieces = this.refs.shipinfoPieces.value; 
    var shipinfoLength = this.refs.shipinfoLength.value; 
    var ShipInfoWidth = this.refs.shipinfoWidth.value; 
    var ShipInfoHeight = this.refs.shipinfoHeight.value; 
    var ShiphwbNumber = this.refs.shiphwbNumber.value;
    var Description = this.refs.shipinfoDescription.value; 
    var CustomerNumber = this.refs.shipCustomerNumber.value;


    var request = {
      "MessageType": "204",
      "ListOfHwbs": {
         "HwbDetail": {
            "HwbNumber": ShiphwbNumber,
            "OriginAirportCode": "",
            "DestinationAirportCode": "",
            "Shipper": {
               "Name": ShipperName,
               "Address1": ShipperAddress1,
               "Address2": ShipperAddress2,
               "City": ShipperCity,
               "StateProvince": ShipperState,
               "PostalCode": ShipperZip,
               "Country": shipperCountry,
               "Attention": ShipperAttention
            },
            "Consignee": {
               "Name": ConsigneeShipperName,
               "Address1": ConsigneeAddress,
               "Address2": ConsigneeAddress2,
               "City": ConsigneeCity,
               "StateProvince": ConsigneeState,
               "PostalCode": ConsigneeZip,
               "Country": ConsigneeCountry,
               "Attention": ConsigneeAttention
            },
            "Customer": {
               "Number": CustomerNumber
            },
            "Billto": {
               "Name": BilltoShipperName,
               "Address1": BilltoAddress,
               "Address2": BilltoAddress2,
               "City": BilltoCity,
               "StateProvince": BilltoState,
               "PostalCode": BilltoZip,
               "Country": BilltoCountry
            },
            "ShipperReference": ShipmentInfoShipperReference,
            "ConsigneeReference": ShipmentInfoConsigneeReference,
            "ShipDate": ShipInfoShipDate,
            "PickupReadyTime": ShipInfoPickupReadyTime,
            "PickupCloseTime": ShipInfoPickupCloseTime,
            "Status": ShipInfoStatus,
            "PODName": ShipInfoPodName,
            "PODDate": ShipInfoPodDate,
            "PODTime": ShipInfoPodTime,
            "PiecesTotal":ShipInfoPieces,
            "CalledInWeight": shipinfoCalledInWeight,
            "Reweight": ShipInfoReweight,
            "DimWeight": ShipInfoDimWeight,
            "DimFactor": ShipInfoDimFactor,
            "ChargeableWeight": shipinfoChargeableWeight,
            "MeasurementUnit": shipinfoMeasurementUnit,
            "DelInstructions": shipinfoDelInstructions,
            "PUInstructions":ShipInfoPUInstructions,
            "Description": Description,
            "DVInsAmount": ShipInfoDVInsAmount,
            "DVInsType": ShipInfoDVInstType,
            "RemarksList": [],
            "TotalCost": ShipInfoTotalCost,
            "Rate": ShipInfoRate,
            "RateTotal": ShipInfoRateTotal,
            "TotalRevenue": ShipInfoTotalRevenue,
            "RevenueCharges": [],
            "Dims": {
               "Dim": {
                  "Pieces": ShipInfoPieces,
                  "Length": shipinfoLength,
                  "Width": ShipInfoWidth,
                  "Height": ShipInfoHeight
               }
            }
         }
      }
   }

  //  fetch('https://mywebsite.com/endpoint/', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     firstParam: 'yourValue',
  //     secondParam: 'yourOtherValue',
  //   }),
  // });

   //axios.post(`https://api.globaltranz.com/AirFreightUIService/1.0?apiKey=UYeObmoEKxE-bthnLBEZEhja`, request)
   axios.post('/api/v1/sendToESB', request)
   .then((response) => {
        console.log(response);
        console.log("===========================");
         console.log(response.data.body);
        })
      .catch(Error => console.log(Error))

    console.log(request);
    console.log("BUTTON CLICKED");
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GTZ Air Freight Order Creation</h1>
        </header>
<br/>
<br/>
<form>
        <div className="container">
    
        <div className="row">
        <div className="col">
        <h2>Shipper</h2>
    <div className="form-row">
      
        <label for="shipperShipperName">Name</label>
        <input type="text" className="form-control" id="shipperShipperName" placeholder="Name" ref="shipperShipperName"/>
      </div>
    
    <div className="form-group">
    <label for="shipperAddress">Address</label>
    <input type="text" className="form-control" id="shipperAddress" placeholder="1234 Main St" ref="shipperAddress"/>
  </div>
  <div className="form-group">
    <label for="shipperAddress2">Address 2</label>
    <input type="text" className="form-control" id="shipperAddress2" ref="shipperAddress2"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-4">
      <label for="shipperCity">City</label>
      <input type="text" className="form-control" id="shipperCity" ref="shipperCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="shipperState">State</label>
      <input type="text" className="form-control" id="shipperState" ref="shipperState"/>

    </div>
    <div className="form-group col-md-2">
      <label for="shipperZip">Zip</label>
      <input type="text" className="form-control" id="shipperZip" ref="shipperZip"/>
    </div>
    <div className="form-group col-md-2">
      <label for="shipperCountry">Country</label>
      <input type="text" className="form-control" id="shipperCountry" ref="shipperCountry"/>
    </div>

        <div className="form-group col-md-8">
      <label for="shipperAttention">Attention</label>
      <input type="text" className="form-control" id="shipperAttention" ref="shipperAttention"/>
    </div>

  </div>



           
          </div>
          
          <div className="col">
          <h2>Consignee</h2>
            <div className="form-row">
              
                <label for="consigneeName">Name</label>
                <input type="text" className="form-control" id="consigneeShipperName" placeholder="Name" ref="consigneeShipperName"/>
              </div>
            
            <div className="form-group">
    <label for="consigneeAddress">Address</label>
    <input type="text" className="form-control" id="consigneeAddress" placeholder="1234 Main St" ref="consigneeAddress"/>
  </div>
  <div className="form-group">
    <label for="consigneeAddress2">Address 2</label>
    <input type="text" className="form-control" id="consigneeAddress2" placeholder="Apartment, studio, or floor" ref="consigneeAddress2"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-4">
      <label for="consigneeCity">City</label>
      <input type="text" className="form-control" id="consigneeCity" ref="consigneeCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="consigneeState">State</label>
      <input type="text" className="form-control" id="consigneeState" ref="consigneeState"/>

    </div>
    <div className="form-group col-md-2">
      <label for="consigneeZip">Zip</label>
      <input type="text" className="form-control" id="consigneeZip" ref="consigneeZip"/>
    </div>
    <div className="form-group col-md-2">
      <label for="consigneeCountry">Country</label>
      <input type="text" className="form-control" id="consigneeZip" ref="consigneeCountry"/>
    </div>

        <div className="form-group col-md-8">
      <label for="consigneeAttention">Attention</label>
      <input type="text" className="form-control" id="consigneeAttention" ref="consigneeAttention"/>
    </div>

  </div>

          </div> 
          <br/>
          <div className="w-100"><hr/></div>
          <div className="col">
        <h2>Bill-To</h2>
            <div className="form-row">
              
                <label for="billtoName">Name</label>
                <input type="text" className="form-control" id="billtoShipperName" placeholder="Name" ref="billtoShipperName"/>
              </div>
            
            <div className="form-group">
    <label for="billtoAddress">Address</label>
    <input type="text" className="form-control" id="billtoAddress" placeholder="1234 Main St" ref="billtoAddress"/>
  </div>
  <div className="form-group">
    <label for="billtoAddress2">Address 2</label>
    <input type="text" className="form-control" id="billtoAddress2" placeholder="Apartment, studio, or floor" ref="billtoAddress2"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-4">
      <label for="billtoCity">City</label>
      <input type="text" className="form-control" id="billtoCity" ref="billtoCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="billtoState">State</label>
      <input type="text" className="form-control" id="billtoState" ref="billtoState"/>

    </div>
    <div className="form-group col-md-2">
      <label for="billtoZip">Zip</label>
      <input type="text" className="form-control" id="billtoZip" ref="billtoZip"/>
    </div>
    <div className="form-group col-md-2">
      <label for="billtoCountry">Country</label>
      <input type="text" className="form-control" id="billtoCountry" ref="billtoCountry"/>
    </div>

        <div className="form-group col-md-8">
      <label for="billtoAttention">Attention</label>
      <input type="text" className="form-control" id="billtoAttention" ref="billtoAttention"/>
    </div>

  </div>

          </div>
          <br/>
          
          <div className="col">
          <h2>Shipment Info</h2>
          <div className="form-row">
              <div className="form-group col-md-6">
          <label for="shiphwbNumber">HWB Number</label>
          <input type="text" className="form-control" id="shiphwbNumber" ref="shiphwbNumber" />
          </div>
          <div className="form-group col-md-6">
          <label for="shipCustomerNumber">Customer Number</label>
          <input type="text" className="form-control" id="shipCustomerNumber" ref="shipCustomerNumber" />
          </div>
          </div>
          <div className="form-row">
              <div className="form-group col-md-6">
                <label for="shipinfoShipperReference">Shipper Reference</label>
                <input type="text" className="form-control" id="shipinfoShipperReference" ref="shipinfoShipperReference" />
              </div>
              <div className="form-group col-md-6">
                <label for="shipinfoConsigneeReference">Consignee Reference</label>
                <input type="text" className="form-control" id="shipinfoConsigneeReference" ref="shipinfoConsigneeReference" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="shipinfoShipDate">Ship Date</label>
                <input type="text" className="form-control" id="shipinfoShipDate" ref="shipinfoShipDate" />
              </div>
              <div className="form-group col-md-6">
                <label for="shipinfoStatus">Status</label>
                <input type="text" className="form-control" id="shipinfoStatus" ref="shipinfoStatus"/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="shipinfoPickupReadyTime">Pickup Ready Time</label>
                <input type="text" className="form-control" id="shipinfoPickupReadyTime" ref="shipinfoPickupReadyTime" />
              </div>
              <div className="form-group col-md-6">
                <label for="shipinfoPickupCloseTime">Pickup Close Time</label>
                <input type="text" className="form-control" id="shipinfoPickupCloseTime" ref="shipinfoPickupCloseTime" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="shipinfoPodName">POD Name</label>
                <input type="text" className="form-control" id="shipinfoPodName" ref="shipinfoPodName" />
              </div>
              <div className="form-group col-md-4">
                <label for="shipinfoPodDate">POD Date</label>
                <input type="text" className="form-control" id="shipinfoPodDate"  ref="shipinfoPodDate"/>
              </div>
              <div className="form-group col-md-4">
                <label for="shipinfoPodTime">POD Time</label>
                <input type="text" className="form-control" id="shipinfoPodTime" ref="shipinfoPodTime" />
              </div>
            </div>
    

            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="shipinfoServiceCode">Service Code</label>
                <input type="text" className="form-control" id="shipinfoServiceCode" ref="shipinfoServiceCode" />
              </div>
              <div className="form-group col-md-4">
                <label for="shipinfoPieces">Pieces</label>
                <input type="text" className="form-control" id="shipinfoPieces" ref="shipinfoPieces"/>
              </div>
              <div className="form-group col-md-4">
                <label for="shipinfoCalledInWeight">Called In Weight</label>
                <input type="text" className="form-control" id="shipinfoCalledInWeight" ref="shipinfoCalledInWeight" />
              </div>
            </div>


            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="shipinfoReweight">Reweight</label>
                <input type="text" className="form-control" id="shipinfoReweight" ref="shipinfoReweight"/>
              </div>
              <div className="form-group col-md-4">
                <label for="shipinfoDimWeight">Dim Weight</label>
                <input type="text" className="form-control" id="shipinfoDimWeight" ref="shipinfoDimWeight" />
              </div>
              <div className="form-group col-md-4">
                <label for="shipinfoDimFactor">DimFactor</label>
                <input type="text" className="form-control" id="shipinfoDimFactor" ref="shipinfoDimFactor" />
              </div>
            </div>


            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="shipinfoChargeableWeight">Chargeable Weight</label>
                <input type="text" className="form-control" id="shipinfoChargeableWeight" ref="shipinfoChargeableWeight"/>
              </div>
              <div className="form-group col-md-4">
                <label for="shipinfoMeasurementUnit">Measurement Unit</label>
                <input type="text" className="form-control" id="shipinfoMeasurementUnit" ref="shipinfoMeasurementUnit" />
              </div>
              <div className="form-group col-md-4">
                <label for="shipinfoCommodityCode">Commodity Code</label>
                <input type="text" className="form-control" id="shipinfoCommodityCode" ref="shipinfoCommodityCode"/>
              </div>
            </div>


            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="shipinfoDelInstructions">Del Instructions</label>
                <input type="text" className="form-control" id="shipinfoDelInstructions" ref="shipinfoDelInstructions" />
              </div>
              <div className="form-group col-md-6">
                <label for="shipinfoPUInstructions">PU Instructions</label>
                <input type="text" className="form-control" id="shipinfoPUInstructions" ref="shipinfoPUInstructions"/>
              </div>

            </div>


                 <div className="form-row">
              <div className="form-group col-md-4">
                <label for="shipinfoDVInsAmount">DV Ins Amount</label>
                <input type="text" className="form-control" id="shipinfoDVInsAmount" ref="shipinfoDVInsAmount" />
              </div>
              <div className="form-group col-md-4">
                <label for="shipinfoDVInsType">DV Ins Type</label>
                <input type="text" className="form-control" id="shipinfoDVInsType" ref="shipinfoDVInsType"/>
              </div>
              <div className="form-group col-md-4">
                <label for="shipinfoTotalCost">Total Cost</label>
                <input type="text" className="form-control" id="shipinfoTotalCost" ref="shipinfoTotalCost" />
              </div>
            </div>


                 <div className="form-row">
              <div className="form-group col-md-4">
                <label for="shipinfoRate">Rate</label>
                <input type="text" className="form-control" id="shipinfoRate" ref="shipinfoRate" />
              </div>
              <div className="form-group col-md-4">
                <label for="shipinfoRateTotal">Rate Total</label>
                <input type="text" className="form-control" id="shipinfoRateTotal" ref="shipinfoRateTotal" />
              </div>
              <div className="form-group col-md-4">
                <label for="shipinfoTotalRevenue">Total Revenue</label>
                <input type="text" className="form-control" id="shipinfoTotalRevenue" ref="shipinfoTotalRevenue"/>
              </div>
            </div>


      <h5>Dims</h5>

                 <div className="form-row">
              <div className="form-group col-md-3">
                <label for="shipinfoPieces">Pieces</label>
                <input type="text" className="form-control" id="shipinfoPieces" ref="shipinfoPieces"/>
              </div>
              <div className="form-group col-md-3">
                <label for="shipinfoLength">Length</label>
                <input type="text" className="form-control" id="shipinfoLength" ref="shipinfoLength"/>
              </div>
              <div className="form-group col-md-3">
                <label for="shipinfoWidth">Width</label>
                <input type="text" className="form-control" id="shipinfoWidth" ref="shipinfoWidth"/>
              </div>
              <div className="form-group col-md-3">
                <label for="shipinfoHeight">Height</label>
                <input type="text" className="form-control" id="shipinfoHeight" ref="shipinfoHeight"/>
              </div>
            </div>
            <label for="shipinfoDescription">Description</label>
                <input type="textArea" className="form-control" id="shipinfoDescription" ref="shipinfoDescription"/>

          </div>
          <br/>
        
        </div>
      <div className="form-check">

      
     
    </div>
    <br/>
    <br/>
    <br/>

    <button type="button" className="btn btn-primary" onClick={() => this.sendToESB()}>Submit</button>
    <br/>
    <br/>

      </div>
    </form>

      </div>
    );
  }
}

export default App;
