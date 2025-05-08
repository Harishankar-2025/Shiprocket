const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

// Define the schema structure of channels.
const channelSchema = new Schema({
    id:{
        type:Number,
        required:true,
        trim:true    
    },
    sellerId:{
        type:String,
        required:true,
        trim:true,
    },
    channel_name:{
        type:String,
        required:true,
        trim:true,
    },
    emailId:{
        type:String,
        trim:true,
        lowercase: true,
    },
    mobile_number:{
        type:String,
        trim:true,
        minlength:10,
        minlength:10,        
    },
    GSTN:{
        type:String,
        required:true,
        trim:true,
    },
    display_name:{
        type:String,
        trim:true,
    },
    pincode:{
        type:String,
        trim:true,
    },
    user_password:{
        type:String,
        trim:true,
    },
    app_Id:{
        type:String,
        trim:true,
    }, 
    AWS_Access_Key_ID:{
        type:String,
        trim:true,
    }, 
    App_Secret:{
        type:String,
        trim:true,
    },
    MWS_Auth_Token:{
        type:String,
        trim:true,
    },
    Secret_key:{
        type:String,
        trim:true,
    },
    access_token:{
        type:String,
        trim:true,
    },
    refresh_token:{
        type:String,
        trim:true,
    },
});

// Define the schema structure of products.
const productSchema = new Schema({
    product_id:{
        type:Number,
        require:true,
        trim:true    
    },
    skucode:{
        type:String,
        require:true,
        trim:true
    },
    evanik_sku:{
        type:String,
        trim:true
    },
    hsn_sac_code:{
        type:String,
        trim:true
    },
    name:{
        type:String,
        trim:true
    },
    evanik_name:{
        type:String,
        trim:true
    },
    unit:{
        type:String,
        trim:true
    },
    unit_type:{
        type:String,
        trim:true
    },
    size:{
        type:String,
        trim:true
    },
    cost:{
        type:String,
        trim:true
    },
    price:{
        type:String,
        trim:true
    },
    mrp:{
        type:String,
        trim:true
    },
    quantity:{
        type:String,
        trim:true
    },
    alert_quantity:{
        type:String,
        trim:true
    },
    image:{
        type:String,
        trim:true
    },
    barcode:{
        type:String,
        trim:true
    },
    category:{
        type:String,
        trim:true
    },
    sub_category:{
        type:String,
        trim:true
    },
    category_id:{
        type:String,
        trim:true
    },
    subcategory_id:{
        type:String,
        trim:true
    },
    brand_id:{
        type:String,
        trim:true
    },
    // auto_brand:{
    //     type:String,
    //     trim:true
    // },
    igst:{
        type:String,
        trim:true
    },
    cgst:{
        type:String,
        trim:true
    },
    sgst:{
        type:String,
        trim:true
    },
    sellerId:{
        type:String,
        trim:true
    },
    channel_name:{
        type:String,
        trim:true
    },
    gst_tax_group:{
        type:String,
        trim:true
    },
    serial_number:{
        type:String,
        trim:true
    },
    listing_id:{
        type:String,
        trim:true
    },
    color:{
        type:String,
        trim:true
    },
    length:{
        type:String,
        trim:true
    },
    breadth:{
        type:String,
        trim:true
    },
    width:{
        type:String,
        trim:true
    },
    weight:{
        type:String,
        trim:true
    },
    height:{
        type:String,
        trim:true
    },
    combo_qty:{
        type:String,
        trim:true
    },
    combo_item1:{
        type:String,
        trim:true
    },
    combo_item1_qty:{
        type:String,
        trim:true
    },
    combo_item1_tax:{
        type:String,
        trim:true
    },
    combo_item1_sellingprice:{
        type:String,
        trim:true
    },
    combo_item2:{
        type:String,
        trim:true
    },
    combo_item2_qty:{
        type:String,
        trim:true
    },
    combo_item2_tax:{
        type:String,
        trim:true
    },
    combo_item2_sellingprice:{
        type:String,
        trim:true
    },
    combo_item3:{
        type:String,
        trim:true
    },
    combo_item3_qty:{
        type:String,
        trim:true
    },
    combo_item3_tax:{
        type:String,
        trim:true
    },
    combo_item3_sellingprice:{
        type:String,
        trim:true
    },
    combo_item4:{
        type:String,
        trim:true
    },
    combo_item4_qty:{
        type:String,
        trim:true
    },
    combo_item4_tax:{
        type:String,
        trim:true
    },
    combo_item4_sellingprice:{
        type:String,
        trim:true
    },
    combo_item5:{
        type:String,
        trim:true
    },
    combo_item5_qty:{
        type:String,
        trim:true
    },
    combo_item5_tax:{
        type:String,
        trim:true
    },
    combo_item5_sellingprice:{
        type:String,
        trim:true
    },
    combo_item6:{
        type:String,
        trim:true
    },
    combo_item6_qty:{
        type:String,
        trim:true
    },
    combo_item6_tax:{
        type:String,
        trim:true
    },
    combo_item6_sellingprice:{
        type:String,
        trim:true
    },
    combo_item7:{
        type:String,
        trim:true
    },
    combo_item7_qty:{
        type:String,
        trim:true
    },
    combo_item7_tax:{
        type:String,
        trim:true
    },
    combo_item7_sellingprice:{
        type:String,
        trim:true
    },
    combo_item8:{
        type:String,
        trim:true
    },
    combo_item8_qty:{
        type:String,
        trim:true
    },
    combo_item8_tax:{
        type:String,
        trim:true
    },
    combo_item8_sellingprice:{
        type:String,
        trim:true
    },
    combo_item9:{
        type:String,
        trim:true
    },
    combo_item9_qty:{
        type:String,
        trim:true
    },
    combo_item9_tax:{
        type:String,
        trim:true
    },
    combo_item9_sellingprice:{
        type:String,
        trim:true
    },
    combo_item10:{
        type:String,
        trim:true
    },
    combo_item10_qty:{
        type:String,
        trim:true
    },
    combo_item10_tax:{
        type:String,
        trim:true
    },
    combo_item10_sellingprice:{
        type:String,
        trim:true
    },
    combo_item11:{
        type:String,
        trim:true
    },
    combo_item11_qty:{
        type:String,
        trim:true
    },
    combo_item11_tax:{
        type:String,
        trim:true
    },
    combo_item11_sellingprice:{
        type:String,
        trim:true
    },
    combo_item12:{
        type:String,
        trim:true
    },
    combo_item12_qty:{
        type:String,
        trim:true
    },
    combo_item12_tax:{
        type:String,
        trim:true
    },
    combo_item12_sellingprice:{
        type:String,
        trim:true
    },
    combo_item13:{
        type:String,
        trim:true
    },
    combo_item13_qty:{
        type:String,
        trim:true
    },
    combo_item13_tax:{
        type:String,
        trim:true
    },
    combo_item13_sellingprice:{
        type:String,
        trim:true
    },
    master_skucode:{
        type:mongoose.Mixed,
        default:{}
    },
    brand:{type:String},
    created_by: {
        type: String,
        trim: true
    },
    sale_rate: {
        type: String,
        trim: true
    },
    basic_rate: {
        type: String,
        trim: true
    }, 
    listing_status: {
        type: String,
        trim: true
    },
    repricer_status:{type:String}
});

// Define the schema structure of payments.
const paymentSchema = new Schema({
    id:{
        type:String,
        require:true,
        trim:true    
    },
    date: {
        type:Date,
        required:true,
        trim:true,
    },
    payment_date: {
        type:Date,
        trim:true,
    },
    invoice_number: {
        type:String,
        trim:true,
    },
    reference_no: {
        type:String,
        trim:true,
    },
    OrderId: {
        type:String,
        required:true,
        trim:true,
    },
    OrderItemID: {
        type:String,
        required:true,
        trim:true,
    },
    transaction_id: {
        type:String
    },
    type: {
        type:String,
        trim:true,
    },
    ProtectionFund: {
        type:Number,
        default:0,
        trim:true,
    },
    TotalMarketplaceFee: {
        type:Number,
        default:0,
        trim:true,
    },
    ServiceTax: {
        type:Number,
        default:0,
        trim:true,
    },
    SettlementValue: {
        type:Number,
        default:0,
        trim:true,
    },
    CommissionRate: {
        type:Number,
        default:0,
        trim:true,
    },
    Commission: {
        type:String,
        trim:true,
    },
    PaymentRate: {
        type:Number,
        default:0,
        trim:true,
    },
    PaymentFee: {
        type:String,
        trim:true,
    },
    ReversePaymentFee: {
        type:Number,
        default:0,
        trim:true,
    },
    FeeDiscount: {
        type:Number,
        default:0,
        trim:true,
    },
    ShippingFee: {
        type:Number,
        default:0,
        trim:true,
    },
    ReverseShippingFee: {
        type:Number,
        default:0,
        trim:true,
    },
    shippingFeeReversal: {
        type:Number,
        default:0,
        trim:true,
    },
    fixed_fee: {
        type:Number,
        default:0,
        trim:true,
    },
    PickAndPackFee: {
        type:Number,
        default:0,
        trim:true,
    },
    sellerId: {
        type:String,
        trim:true,
    },
    skucode: {
        type:String,
        trim:true,
    },
    OrderDate: {
        type:String,
    },
    sale_status: {
        type:String,
        trim:true,
    },
    total_items: {
        type:Number,
        default:0,
        trim:true,
    },
    OrderTotal: {
        type:String,
        trim:true,
    },
    cron_id: {
        type:String,
        trim:true,
    },
    tcs: {
        type:String,
        trim:true,
    },
    whid: {
        type:String,
        trim:true,
    },
    tcs_igst: String,
    orderCount: {
        type:Number,
        default:0,
        trim:true,
    },
    cron_id2: {
        type:String,
        trim:true,
    },
    cron_id3: {
        type:String,
        trim:true,
    },
    tds: {
        type:String,
        trim:true,
    },
    extra_1:{
        type:mongoose.Mixed,
        default:{}
    },
    channels:{
        type:mongoose.Mixed,
        default:{}
    },
    sales:{
        type:mongoose.Mixed,
        default:{}
    },
    charges:{
        type:mongoose.Mixed,
        default:{}
    }
}); 

// Define the schema structure of sales.
const saleSchema = new Schema({
    sales_id: {
        type: Number,
        required: true    
    },
    whid:{type:String},
    warehouse_id: {
        type: Number,
        default: 1
    },
    date: Date,
    total: {
        type: Number,
        default: 0
    },
    tax_value: String,
    discount_value: String,
    paid_by: String,
    payment_id: String,
    mrp: String,
    commission_return: {
        type: Number,
        default: 0
    },
    TrackingID:String,
    sale_status: String,
    total_items: Number,
    OrderId:{
        type: String,    
    },
    OrderType: String,
    skucode: {
        type:String    
    },
    BuyerName: String,
    email: {
        type: String,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true,
        minlength: 0,
        maxlength: 20 
    },
    refund_date:String,
    City: String,
    State: String,
    ShippingDate: Date,
    sellerId: {
        type: String    
    },
    ShipmentStatus: String,
    invoice_date: String,
    weightType: String,
    volumetricFormula: String,
    weight: String,
    weightSlab: String,
    shipmentLength: String,
    shipmentBreadth: String,
    shipmentHeight: String,
    volumetricWeight: String,
    commission: String,
    return_date: Date,
    return_status: String,
    Comments: String,
    actual_payout: {
        type: Number,
        default: 0
    },
    ImageUrl: String,
    paid: {
        type: Number,
        default: 0
    },
    payment_status: String,
    price: {
        type: Number,
        default: 0
    },
    gross_total: {
        type: Number,
        default: 0
    },
    paid_amount: {
        type: Number,
        default: 0
    },
    ReturnCreatedOn: String,
    ReturnCreatedOnDate: Date,
    returnflag: {
        type: String,
        default: 0
    },
    invoice_number: String,
    OrderItemID: {
        type:String    
    },
    total_return: {
        type: Number,
        default: 0
    },
    total_tax_return: {
        type: Number,
        default: 0
    },
    grand_total_return: {
        type: Number,
        default: 0
    },
    grand_total: {
        type: Number,
        default: 0
    },
    ReturnAction: String,
    ReturnType: String,
    DisputeCreated: String,
    NewOrderItemId: String,
    ReturnID: String,
    replacement: String,
    ReturnTrackingId: String,
    igst_rate: String,
    cgst_rate: String,
    sgst_amount: {
        type: Number,
        default: 0
    },
    igst_amount: String,
    cgst_amount: {
        type: Number,
        default: 0
    },
    verticalName: String,
    shippingFee: String,
    total_tax: String,
    PinCode: String,
    imei: String,
    sgst_rate: String,
    payment_method: String,
    reclaim_flag: String,
    Seller_Order_Id: String,
    gst_number:String,
    channels:{
        type:mongoose.Mixed,
        default:{}
    },
    products:{
        type:mongoose.Mixed,
        default:{}
    },
    pincodes:{
        type:mongoose.Mixed,
        default:{}
    },
    payments:{
        type:Array,
        default:[]
    },
    master_status:{
        type:mongoose.Mixed,
        default:{}
    },
    Channel_incident_ID:{type:String},
    claim_details:{
        type:mongoose.Mixed,
        default:{}
    },
    extra_3:{
        type:mongoose.Mixed,
        default:{}
    },
    Address1:{type:String},
    Address2:{type:String},
    staff_note   : {type:String},
    FSN          : {type:String},
    shipmentId   : {type:String},
    shippingZone : {type:String},
    myntra_rate_card:{
        type:mongoose.Mixed,
        default:{}
    },
    transporter_name:{type:String}
});

//define the structure of pincode schema.
const pinCodeschema = ({
    id:{
        type:Number,
        require:true,
        trim:true    
    },
    pincode:{
        type:Number   
    },
    statename:{
        type:String,
        require:true,
        trim:true    
    },
    stateid:{
        type:Number,
        require:true,
        trim:true    
    },
    region:{
        type:String,
        require:true,
        trim:true    
    },
    flipkart_region:{
        type:String,
        trim:true    
    },
    amazon_region:{
        type:String,
        trim:true    
    },
    District:{
        type:String,
        trim:true    
    },
    PlaceofSupply:{
        type:String,
        require:true,
        trim:true    
    }
})

//define master sale status schema.
const masterSaleStatusSchema = ({
    Sale_status:String,
    Master_Status:String,
});


//Export ṭhe models.
module.exports = {channelSchema,productSchema,paymentSchema,saleSchema,pinCodeschema,masterSaleStatusSchema}