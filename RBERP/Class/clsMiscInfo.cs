using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;
using System.Xml.Linq;

namespace BookMyShow.BackOfficeService
{
    [Serializable]
    public class clsMiscInfo
    {

        #region Information for Uploading Images
        [DataMember]
        public string Filename { get; set; }
        [DataMember]
        public byte[] FileStream { get; set; }
        [DataMember]
        public string ImageType { get; set; }
        [DataMember]
        public string Width { get; set; }
        [DataMember]
        public string Height { get; set; }
        [DataMember]
        public string SizeCode { get; set; }
        [DataMember]
        public string ImageSequence { get; set; }

        #endregion                

        #region Region_EventDetails
        [DataMember]
        public int intId { get; set; }
        [DataMember]
        public string strRegionCode { get; set; }
        [DataMember]
        public string strSubRegionCode { get; set; }
        [DataMember]
        public string strEventCode { get; set; }
        [DataMember]
        public string strEventName { get; set; }
        [DataMember]
        public string strAttributeId { get; set; }
        [DataMember]
        public int intSequence { get; set; }
        [DataMember]
        public string strStatus { get; set; }
        [DataMember]
        public DateTime dtmDateFrom { get; set; }
        [DataMember]
        public DateTime dtmDateTo { get; set ; }
        [DataMember]
        public DateTime dtmStamp { get; set; }
        [DataMember]
        public string strXmlOffers { get; set; }
        [DataMember]
        public string strRedirectUrl { get; set; }
        [DataMember]
        public byte[] arrImageStream { get; set; }
        [DataMember]
        public string strXmlDetails { get; set; }
        [DataMember]
        public string strImageExtension { get; set; }
        #endregion  
      
    }


}