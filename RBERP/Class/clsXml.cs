using System;
using System.Collections.Generic;
using System.Text;
using System.Xml;
using System.Data;
using System.IO;
using System.Collections;


public class clsXml
{
    const string udcErrorSource = "clsXml.cs";

    #region "WRITING XML FILES."

    /// <summary>
    /// will open if file exsists creates the same if wont exits.
    /// </summary>
    /// <param name="strFilename">file to open/Create </param>
    /// <param name="strRootNode">root node of the file</param>
    /// <returns></returns>
    public XmlDocument OpenXmlDoc(string strRootNode, string strFilePath)
    {
        XmlDocument xmlDoc = new XmlDocument();
        try
        {
            xmlDoc.Load(strFilePath);
        }
        catch (System.IO.FileNotFoundException)
        {
            //if file is not found, create a new xml file
            XmlTextWriter xmlWriter = new XmlTextWriter(strFilePath, System.Text.Encoding.UTF8);
            xmlWriter.Formatting = Formatting.Indented;
            xmlWriter.WriteProcessingInstruction("xml", "version='1.0' encoding='UTF-8'");
            xmlWriter.WriteStartElement(strRootNode);
            xmlWriter.Close();
            xmlDoc.Load(strFilePath);
        }
        SaveXML(xmlDoc, strFilePath);
        return xmlDoc;
    }

    /// <summary>
    /// Adds the xml Node
    /// </summary>
    /// <param name="xDoc">xml Document to whcih to add the Node.</param>
    /// <param name="strNodeName"></param>
    /// <param name="xNode"></param>
    public XmlNode AddXMLNode(XmlDocument xDoc, string strNodeName, XmlNode xNode, string strFilePath)
    {
        XmlElement xElem;
        xElem = xDoc.CreateElement(strNodeName);
        xNode.AppendChild(xElem);
        //SaveXML(xDoc, strFilePath);
        return xElem;
    }

    /// <summary>
    /// Adds the XML Attribute to the exsisting XML Node
    /// </summary>
    /// <param name="xDoc">xml Document to object</param>
    /// <param name="xNode">XML Node to which to add the Attributes</param>
    /// <param name="strAttrName">Attribute Name</param>
    /// <param name="strAttrValue">Attribute Value</param>
    public void addXMLAttribute(XmlDocument xDoc, XmlNode xNode, string strAttrName, string strAttrValue, string strFilePath)
    {
        XmlAttribute xAttr = xDoc.CreateAttribute(strAttrName);
        xAttr.Value = strAttrValue;
        xNode.Attributes.Append(xAttr);
        //SaveXML(xDoc, strFilePath);
    }

    /// <summary>
    /// Saves the XML Document.
    /// </summary>
    /// <param name="xDoc">The XML Doucument to save</param>
    public void SaveXML(XmlDocument xDoc, string strFilePath)
    {
        xDoc.Save(strFilePath);
    }

    #endregion


}

