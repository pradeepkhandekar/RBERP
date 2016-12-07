using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;

/// <summary>
/// Summary description for CommanData
/// </summary>
public class CommanData
{
    public static DataSet dsmain = new DataSet();
    public static string strSales;
	public CommanData()
	{
	}
    public static string ConnectionString()
    {

        return "Data Source=49.50.77.98;User Id=rb;password=Kotak@123;Initial Catalog=RupeeBoss;";
    }
  
}