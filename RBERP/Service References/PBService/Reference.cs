﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace RBERP.PBService {
    using System.Runtime.Serialization;
    using System;
    
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="Contacts", Namespace="http://schemas.datacontract.org/2004/07/Landmark.Indirect.DataLogicLayer")]
    [System.SerializableAttribute()]
    public partial class Contacts : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged {
        
        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int CityIDField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string CustomerAddressField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string CustomerEmailField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string CustomerMobileField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string CustomerNameField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int CustomerPinCodeField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private short DesignationIDField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int EmployeeIDField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private short RelationIdField;
        
        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData {
            get {
                return this.extensionDataField;
            }
            set {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int CityID {
            get {
                return this.CityIDField;
            }
            set {
                if ((this.CityIDField.Equals(value) != true)) {
                    this.CityIDField = value;
                    this.RaisePropertyChanged("CityID");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string CustomerAddress {
            get {
                return this.CustomerAddressField;
            }
            set {
                if ((object.ReferenceEquals(this.CustomerAddressField, value) != true)) {
                    this.CustomerAddressField = value;
                    this.RaisePropertyChanged("CustomerAddress");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string CustomerEmail {
            get {
                return this.CustomerEmailField;
            }
            set {
                if ((object.ReferenceEquals(this.CustomerEmailField, value) != true)) {
                    this.CustomerEmailField = value;
                    this.RaisePropertyChanged("CustomerEmail");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string CustomerMobile {
            get {
                return this.CustomerMobileField;
            }
            set {
                if ((object.ReferenceEquals(this.CustomerMobileField, value) != true)) {
                    this.CustomerMobileField = value;
                    this.RaisePropertyChanged("CustomerMobile");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string CustomerName {
            get {
                return this.CustomerNameField;
            }
            set {
                if ((object.ReferenceEquals(this.CustomerNameField, value) != true)) {
                    this.CustomerNameField = value;
                    this.RaisePropertyChanged("CustomerName");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int CustomerPinCode {
            get {
                return this.CustomerPinCodeField;
            }
            set {
                if ((this.CustomerPinCodeField.Equals(value) != true)) {
                    this.CustomerPinCodeField = value;
                    this.RaisePropertyChanged("CustomerPinCode");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public short DesignationID {
            get {
                return this.DesignationIDField;
            }
            set {
                if ((this.DesignationIDField.Equals(value) != true)) {
                    this.DesignationIDField = value;
                    this.RaisePropertyChanged("DesignationID");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int EmployeeID {
            get {
                return this.EmployeeIDField;
            }
            set {
                if ((this.EmployeeIDField.Equals(value) != true)) {
                    this.EmployeeIDField = value;
                    this.RaisePropertyChanged("EmployeeID");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public short RelationId {
            get {
                return this.RelationIdField;
            }
            set {
                if ((this.RelationIdField.Equals(value) != true)) {
                    this.RelationIdField = value;
                    this.RaisePropertyChanged("RelationId");
                }
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="PBService.IEmployeeRegistrationServiceContract")]
    public interface IEmployeeRegistrationServiceContract {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/AuthenticateEmployeeLogin" +
            "", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/AuthenticateEmployeeLogin" +
            "Response")]
        System.Data.DataSet AuthenticateEmployeeLogin(string EmployeeCode, string Password);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/AuthenticateEmployeeLogin" +
            "", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/AuthenticateEmployeeLogin" +
            "Response")]
        System.Threading.Tasks.Task<System.Data.DataSet> AuthenticateEmployeeLoginAsync(string EmployeeCode, string Password);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/CreateLead", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/CreateLeadResponse")]
        int CreateLead(byte OwnerTypeID, string Name, string MobileNo, string Email, string Address, string CityID, string PinCode, int EmployeeID, string ReferredBy, RBERP.PBService.Contacts[] arrContacts);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/CreateLead", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/CreateLeadResponse")]
        System.Threading.Tasks.Task<int> CreateLeadAsync(byte OwnerTypeID, string Name, string MobileNo, string Email, string Address, string CityID, string PinCode, int EmployeeID, string ReferredBy, RBERP.PBService.Contacts[] arrContacts);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/InsertAppointment", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/InsertAppointmentResponse" +
            "")]
        int InsertAppointment(bool IsNewAppointment, string Agenda, System.DateTime ScheduleDateTime, string Priority, long LeadID, int EmployeeID, string Contact, string AppointmentNote, long Appointment_ID, short ProductID);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/InsertAppointment", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/InsertAppointmentResponse" +
            "")]
        System.Threading.Tasks.Task<int> InsertAppointmentAsync(bool IsNewAppointment, string Agenda, System.DateTime ScheduleDateTime, string Priority, long LeadID, int EmployeeID, string Contact, string AppointmentNote, long Appointment_ID, short ProductID);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/GetAppointments", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/GetAppointmentsResponse")]
        System.Data.DataSet GetAppointments(int EmployeeID);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/GetAppointments", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/GetAppointmentsResponse")]
        System.Threading.Tasks.Task<System.Data.DataSet> GetAppointmentsAsync(int EmployeeID);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/GetCustomerBySearch", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/GetCustomerBySearchRespon" +
            "se")]
        System.Data.DataSet GetCustomerBySearch(
                    int FromAge, 
                    int ToAge, 
                    double FromIncome, 
                    double ToIncome, 
                    string Gender, 
                    int CityID, 
                    int FromNoOfKids, 
                    int ToNoOfKids, 
                    string Designation, 
                    short Variant_ID, 
                    System.Nullable<System.DateTime> FromRenewalDates, 
                    System.Nullable<System.DateTime> ToRenewalDates, 
                    double FromPremiumAmount, 
                    double ToPremiumAmount, 
                    short CurrentInsurer, 
                    bool ClaimRegistered, 
                    int FromNumberOfPolicies, 
                    int ToNumberOfPolicies, 
                    bool Persistency, 
                    bool IsPolicySoldLastMonth, 
                    bool IsPolicySoldLastQuarter, 
                    bool IsPolicySoldLastYear, 
                    bool IsExpire, 
                    int EmployeeID, 
                    string CustomerName, 
                    string MobileNumber, 
                    string SearchLeadType);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/GetCustomerBySearch", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/GetCustomerBySearchRespon" +
            "se")]
        System.Threading.Tasks.Task<System.Data.DataSet> GetCustomerBySearchAsync(
                    int FromAge, 
                    int ToAge, 
                    double FromIncome, 
                    double ToIncome, 
                    string Gender, 
                    int CityID, 
                    int FromNoOfKids, 
                    int ToNoOfKids, 
                    string Designation, 
                    short Variant_ID, 
                    System.Nullable<System.DateTime> FromRenewalDates, 
                    System.Nullable<System.DateTime> ToRenewalDates, 
                    double FromPremiumAmount, 
                    double ToPremiumAmount, 
                    short CurrentInsurer, 
                    bool ClaimRegistered, 
                    int FromNumberOfPolicies, 
                    int ToNumberOfPolicies, 
                    bool Persistency, 
                    bool IsPolicySoldLastMonth, 
                    bool IsPolicySoldLastQuarter, 
                    bool IsPolicySoldLastYear, 
                    bool IsExpire, 
                    int EmployeeID, 
                    string CustomerName, 
                    string MobileNumber, 
                    string SearchLeadType);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/Upload_Diary_Entry", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/Upload_Diary_EntryRespons" +
            "e")]
        int Upload_Diary_Entry(long Lead_ID, string Remark, byte Status_ID, System.Nullable<System.DateTime> Callback_Time, int Employee_ID, long Appointment_ID, bool IsChequeCollected, byte[] ChequeScanCopy, string FileExtension);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/Upload_Diary_Entry", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/Upload_Diary_EntryRespons" +
            "e")]
        System.Threading.Tasks.Task<int> Upload_Diary_EntryAsync(long Lead_ID, string Remark, byte Status_ID, System.Nullable<System.DateTime> Callback_Time, int Employee_ID, long Appointment_ID, bool IsChequeCollected, byte[] ChequeScanCopy, string FileExtension);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/DownLoad_Diary_Entry", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/DownLoad_Diary_EntryRespo" +
            "nse")]
        System.Data.DataSet DownLoad_Diary_Entry(int EmployeeID);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/DownLoad_Diary_Entry", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/DownLoad_Diary_EntryRespo" +
            "nse")]
        System.Threading.Tasks.Task<System.Data.DataSet> DownLoad_Diary_EntryAsync(int EmployeeID);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/GetLead", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/GetLeadResponse")]
        System.Data.DataSet GetLead(long LeadID);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmployeeRegistrationServiceContract/GetLead", ReplyAction="http://tempuri.org/IEmployeeRegistrationServiceContract/GetLeadResponse")]
        System.Threading.Tasks.Task<System.Data.DataSet> GetLeadAsync(long LeadID);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IEmployeeRegistrationServiceContractChannel : RBERP.PBService.IEmployeeRegistrationServiceContract, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class EmployeeRegistrationServiceContractClient : System.ServiceModel.ClientBase<RBERP.PBService.IEmployeeRegistrationServiceContract>, RBERP.PBService.IEmployeeRegistrationServiceContract {
        
        public EmployeeRegistrationServiceContractClient() {
        }
        
        public EmployeeRegistrationServiceContractClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public EmployeeRegistrationServiceContractClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public EmployeeRegistrationServiceContractClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public EmployeeRegistrationServiceContractClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public System.Data.DataSet AuthenticateEmployeeLogin(string EmployeeCode, string Password) {
            return base.Channel.AuthenticateEmployeeLogin(EmployeeCode, Password);
        }
        
        public System.Threading.Tasks.Task<System.Data.DataSet> AuthenticateEmployeeLoginAsync(string EmployeeCode, string Password) {
            return base.Channel.AuthenticateEmployeeLoginAsync(EmployeeCode, Password);
        }
        
        public int CreateLead(byte OwnerTypeID, string Name, string MobileNo, string Email, string Address, string CityID, string PinCode, int EmployeeID, string ReferredBy, RBERP.PBService.Contacts[] arrContacts) {
            return base.Channel.CreateLead(OwnerTypeID, Name, MobileNo, Email, Address, CityID, PinCode, EmployeeID, ReferredBy, arrContacts);
        }
        
        public System.Threading.Tasks.Task<int> CreateLeadAsync(byte OwnerTypeID, string Name, string MobileNo, string Email, string Address, string CityID, string PinCode, int EmployeeID, string ReferredBy, RBERP.PBService.Contacts[] arrContacts) {
            return base.Channel.CreateLeadAsync(OwnerTypeID, Name, MobileNo, Email, Address, CityID, PinCode, EmployeeID, ReferredBy, arrContacts);
        }
        
        public int InsertAppointment(bool IsNewAppointment, string Agenda, System.DateTime ScheduleDateTime, string Priority, long LeadID, int EmployeeID, string Contact, string AppointmentNote, long Appointment_ID, short ProductID) {
            return base.Channel.InsertAppointment(IsNewAppointment, Agenda, ScheduleDateTime, Priority, LeadID, EmployeeID, Contact, AppointmentNote, Appointment_ID, ProductID);
        }
        
        public System.Threading.Tasks.Task<int> InsertAppointmentAsync(bool IsNewAppointment, string Agenda, System.DateTime ScheduleDateTime, string Priority, long LeadID, int EmployeeID, string Contact, string AppointmentNote, long Appointment_ID, short ProductID) {
            return base.Channel.InsertAppointmentAsync(IsNewAppointment, Agenda, ScheduleDateTime, Priority, LeadID, EmployeeID, Contact, AppointmentNote, Appointment_ID, ProductID);
        }
        
        public System.Data.DataSet GetAppointments(int EmployeeID) {
            return base.Channel.GetAppointments(EmployeeID);
        }
        
        public System.Threading.Tasks.Task<System.Data.DataSet> GetAppointmentsAsync(int EmployeeID) {
            return base.Channel.GetAppointmentsAsync(EmployeeID);
        }
        
        public System.Data.DataSet GetCustomerBySearch(
                    int FromAge, 
                    int ToAge, 
                    double FromIncome, 
                    double ToIncome, 
                    string Gender, 
                    int CityID, 
                    int FromNoOfKids, 
                    int ToNoOfKids, 
                    string Designation, 
                    short Variant_ID, 
                    System.Nullable<System.DateTime> FromRenewalDates, 
                    System.Nullable<System.DateTime> ToRenewalDates, 
                    double FromPremiumAmount, 
                    double ToPremiumAmount, 
                    short CurrentInsurer, 
                    bool ClaimRegistered, 
                    int FromNumberOfPolicies, 
                    int ToNumberOfPolicies, 
                    bool Persistency, 
                    bool IsPolicySoldLastMonth, 
                    bool IsPolicySoldLastQuarter, 
                    bool IsPolicySoldLastYear, 
                    bool IsExpire, 
                    int EmployeeID, 
                    string CustomerName, 
                    string MobileNumber, 
                    string SearchLeadType) {
            return base.Channel.GetCustomerBySearch(FromAge, ToAge, FromIncome, ToIncome, Gender, CityID, FromNoOfKids, ToNoOfKids, Designation, Variant_ID, FromRenewalDates, ToRenewalDates, FromPremiumAmount, ToPremiumAmount, CurrentInsurer, ClaimRegistered, FromNumberOfPolicies, ToNumberOfPolicies, Persistency, IsPolicySoldLastMonth, IsPolicySoldLastQuarter, IsPolicySoldLastYear, IsExpire, EmployeeID, CustomerName, MobileNumber, SearchLeadType);
        }
        
        public System.Threading.Tasks.Task<System.Data.DataSet> GetCustomerBySearchAsync(
                    int FromAge, 
                    int ToAge, 
                    double FromIncome, 
                    double ToIncome, 
                    string Gender, 
                    int CityID, 
                    int FromNoOfKids, 
                    int ToNoOfKids, 
                    string Designation, 
                    short Variant_ID, 
                    System.Nullable<System.DateTime> FromRenewalDates, 
                    System.Nullable<System.DateTime> ToRenewalDates, 
                    double FromPremiumAmount, 
                    double ToPremiumAmount, 
                    short CurrentInsurer, 
                    bool ClaimRegistered, 
                    int FromNumberOfPolicies, 
                    int ToNumberOfPolicies, 
                    bool Persistency, 
                    bool IsPolicySoldLastMonth, 
                    bool IsPolicySoldLastQuarter, 
                    bool IsPolicySoldLastYear, 
                    bool IsExpire, 
                    int EmployeeID, 
                    string CustomerName, 
                    string MobileNumber, 
                    string SearchLeadType) {
            return base.Channel.GetCustomerBySearchAsync(FromAge, ToAge, FromIncome, ToIncome, Gender, CityID, FromNoOfKids, ToNoOfKids, Designation, Variant_ID, FromRenewalDates, ToRenewalDates, FromPremiumAmount, ToPremiumAmount, CurrentInsurer, ClaimRegistered, FromNumberOfPolicies, ToNumberOfPolicies, Persistency, IsPolicySoldLastMonth, IsPolicySoldLastQuarter, IsPolicySoldLastYear, IsExpire, EmployeeID, CustomerName, MobileNumber, SearchLeadType);
        }
        
        public int Upload_Diary_Entry(long Lead_ID, string Remark, byte Status_ID, System.Nullable<System.DateTime> Callback_Time, int Employee_ID, long Appointment_ID, bool IsChequeCollected, byte[] ChequeScanCopy, string FileExtension) {
            return base.Channel.Upload_Diary_Entry(Lead_ID, Remark, Status_ID, Callback_Time, Employee_ID, Appointment_ID, IsChequeCollected, ChequeScanCopy, FileExtension);
        }
        
        public System.Threading.Tasks.Task<int> Upload_Diary_EntryAsync(long Lead_ID, string Remark, byte Status_ID, System.Nullable<System.DateTime> Callback_Time, int Employee_ID, long Appointment_ID, bool IsChequeCollected, byte[] ChequeScanCopy, string FileExtension) {
            return base.Channel.Upload_Diary_EntryAsync(Lead_ID, Remark, Status_ID, Callback_Time, Employee_ID, Appointment_ID, IsChequeCollected, ChequeScanCopy, FileExtension);
        }
        
        public System.Data.DataSet DownLoad_Diary_Entry(int EmployeeID) {
            return base.Channel.DownLoad_Diary_Entry(EmployeeID);
        }
        
        public System.Threading.Tasks.Task<System.Data.DataSet> DownLoad_Diary_EntryAsync(int EmployeeID) {
            return base.Channel.DownLoad_Diary_EntryAsync(EmployeeID);
        }
        
        public System.Data.DataSet GetLead(long LeadID) {
            return base.Channel.GetLead(LeadID);
        }
        
        public System.Threading.Tasks.Task<System.Data.DataSet> GetLeadAsync(long LeadID) {
            return base.Channel.GetLeadAsync(LeadID);
        }
    }
}