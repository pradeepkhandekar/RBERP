using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Collections;

namespace BackOffice.Class
{
    public class clsCinemaDetails
    {
        public static string SyncError { get; set; }

        public static string SyncErrorDate { get; set; }

        public static string SyncGroup { get; set; }

        public static string LastDataRefreshDate { get; set; }

        public static string OtherXmlDetails { get; set; }

        public static int counter { get; set; }

    }
}