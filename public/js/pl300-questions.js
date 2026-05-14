// PL-300 Question Bank — RR Skillverse
// Total parsed from PDF: 169
// Skipped (image/exhibit dependent): 28
// Valid questions included: 141
// Free (id 1–80): first 80 questions
// Premium (id 81+): remaining 61 questions
// Last updated: 2026-05-14

const pl300Questions = [
  {
    id: 1,
    topic: "Topic 1",
    type: "mcq",
    question: "You have a project management app that is fully hosted in Microsoft Teams. The app was developed by using Microsoft Power Apps.\nYou need to create a Power BI report that connects to the project management app.\nWhich connector should you select?",
    options: [
      "A. Microsoft Teams Personal Analytics",
      "B. SQL Server database",
      "C. Dataverse",
      "D. Dataflows"
    ],
    correctAnswer: "C",
    explanation: "Data sources in Power BI Desktop.\nThe Power Platform category provides the following data connections:\nPower BI datasets -\nPower BI dataflows -\nCommon Data Service (Legacy)\nDataverse -\nDataflows -\nOther data sources include Microsoft Teams Personal Analytics (Beta).\nReference:",
    communityVote: "C (100%)",
    isPremium: false
  },
  {
    id: 2,
    topic: "Topic 1",
    type: "mcq",
    question: "For the sales department at your company, you publish a Power BI report that imports data from a Microsoft Excel file located in a Microsoft\nSharePoint folder.\nThe data model contains several measures.\nYou need to create a Power BI report from the existing data. The solution must minimize development effort.\nWhich type of data source should you use?",
    options: [
      "A. Power BI dataset",
      "B. a SharePoint folder",
      "C. Power BI dataflows",
      "D. an Excel workbook"
    ],
    correctAnswer: "B",
    explanation: "Connect to a SharePoint folder from Power Query Desktop\nTo connect to a SharePoint folder:\n1. From Get Data, select SharePoint folder.\n2. Paste the SharePoint site URL you copied in Determine the site URL to the Site URL text box in the SharePoint folder dialog box. In this\nexample, the site URL is https://contoso.sharepoint.com/marketing/data. If the site URL you enter is invalid, a warning icon. warning icon will\nappear next to the URL text box.\nSelect OK to continue.\n3. If this is the first time you've visited this site address, select the appropriate authentication method. Enter your credentials and choose which\nlevel to apply these settings to. Then select Connect.\n4. When you select the SharePoint folder you want to use, the file information about all of the files in that SharePoint folder are displayed. In\naddition, file information about any files in any subfolders is also displayed.\n5. Etc.\nReference:",
    communityVote: "A (71%)",
    isPremium: false
  },
  {
    id: 3,
    topic: "Topic 1",
    type: "mcq",
    question: "You import two Microsoft Excel tables named Customer and Address into Power Query. Customer contains the following columns:\n✑ Customer ID\n✑ Customer Name\n✑ Phone\n✑ Email Address\n✑ Address ID\nAddress contains the following columns:\n✑ Address ID\n✑ Address Line 1\n✑ Address Line 2\n✑ City\n✑ State/Region\n✑ Country\n✑ Postal Code\nEach Customer ID represents a unique customer in the Customer table. Each Address ID represents a unique address in the Address table.\nYou need to create a query that has one row per customer. Each row must contain City, State/Region, and Country for each customer.\nWhat should you do?",
    options: [
      "A. Merge the Customer and Address tables.",
      "B. Group the Customer and Address tables by the Address ID column.",
      "C. Transpose the Customer and Address tables.",
      "D. Append the Customer and Address tables."
    ],
    correctAnswer: "A",
    explanation: "A merge queries operation joins two existing tables together based on matching values from one or multiple columns. You can choose to use\ndifferent types of joins, depending on the output you want.\nReference:",
    communityVote: "A (100%)",
    isPremium: false
  },
  {
    id: 4,
    topic: "Topic 1",
    type: "hotspot",
    question: "You have two Azure SQL databases that contain the same tables and columns.\nFor each database, you create a query that retrieves data from a table named Customer.\nYou need to combine the Customer tables into a single table. The solution must minimize the size of the data model and support scheduled\nrefresh in powerbi.com.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    options: [],
    correctAnswer: "Box 1: Append Queries as New -\nWhen you have additional rows of data that you'd like to add to an existing query, you append the query.\nThere are two append options:\n* Append queries as new displays the Append dialog box to create a new query by appending multiple tables.\n* Append queries displays the Append dialog box to add additional tables to the current query.\nIncorrect: When you have one or more columns that you'd like to add to another query, you merge the queries.\nBox 2: Disable loading the query to the data model\nBy default, all queries from Query Editor will be loaded into the memory of Power BI Model. You can disable the load for some queries,\nespecially queries that used as intermediate transformation to produce the final query for the model.\nDisabling Load doesn't mean the query won't be refreshed, it only means the query won't be loaded into the memory. When you click on Refresh\nmodel in Power\nBI, or when a scheduled refresh happens even queries marked as Disable Load will be refreshed, but their data will be used as intermediate\nsource for other queries instead of loading directly into the model. This is a very basic performance tuning tip, but very important when your\nPower BI model grows bigger and bigger.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 5,
    topic: "Topic 1",
    type: "dragdrop",
    question: "In Power Query Editor, you have three queries named ProductCategory, ProductSubCategory, and Product.\nEvery Product has a ProductSubCategory.\nNot every ProductsubCategory has a parent ProductCategory.\nYou need to merge the three queries into a single query. The solution must ensure the best performance in Power Query.\nHow should you merge the tables? To answer, drag the appropriate merge types to the correct queries. Each merge type may be used once, more\nthan once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    options: [],
    correctAnswer: "Box 1: Inner -\nEvery Product has a ProductSubCategory.\nA standard join is needed.\nOne of the join kinds available in the Merge dialog box in Power Query is an inner join, which brings in only matching rows from both the left and\nright tables.\nBox 2: Left outer -\nNot every ProductsubCategory has a parent ProductCategory.\nOne of the join kinds available in the Merge dialog box in Power Query is a left outer join, which keeps all the rows from the left table and brings\nin any matching rows from the right table.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 6,
    topic: "Topic 1",
    type: "mcq",
    question: "You are building a Power BI report that uses data from an Azure SQL database named erp1.\nYou import the following tables.\nYou need to perform the following analyses:\n✑ Orders sold over time that include a measure of the total order value\nOrders by attributes of products sold\nThe solution must minimize update times when interacting with visuals in the report.\nWhat should you do first?",
    options: [
      "A. From Power Query, merge the Order Line Items query and the Products query.",
      "B. Create a calculated column that adds a list of product categories to the Orders table by using a DAX function.",
      "C. Calculate the count of orders per product by using a DAX function.",
      "D. From Power Query, merge the Orders query and the Order Line Items query."
    ],
    correctAnswer: "D",
    explanation: "A merge queries operation joins two existing tables together based on matching values from one or multiple columns.\nJoin the Orders and the Order Line Items tables.\nReference:",
    communityVote: "D (60%)",
    isPremium: false
  },
  {
    id: 7,
    topic: "Topic 1",
    type: "mcq",
    question: "You have a Microsoft SharePoint Online site that contains several document libraries.\nOne of the document libraries contains manufacturing reports saved as Microsoft Excel files. All the manufacturing reports have the same data\nstructure.\nYou need to use Power BI Desktop to load only the manufacturing reports to a table for analysis.\nWhat should you do?\nreports library.",
    options: [
      "A. Get data from a SharePoint folder and enter the site URL Select Transform, then filter by the folder path to the manufacturing reports library.",
      "B. Get data from a SharePoint list and enter the site URL. Select Combine & Transform, then filter by the folder path to the manufacturing",
      "C. Get data from a SharePoint folder, enter the site URL, and then select Combine & Load.",
      "D. Get data from a SharePoint list, enter the site URL, and then select Combine & Load."
    ],
    correctAnswer: "A",
    explanation: "Get Data from SharePoint folder + select Combine & Load to load the data from all of the files in the SharePoint folder directly into your app.\nNote: Connect to a SharePoint folder from Power Query Desktop\nTo connect to a SharePoint folder:\n1. From Get Data, select SharePoint folder.\n2. Paste the SharePoint site URL you copied in Determine the site URL to the Site URL text box in the SharePoint folder dialog box. In this\nexample, the site URL is https://contoso.sharepoint.com/marketing/data. If the site URL you enter is invalid, a warning icon. warning icon will\nappear next to the URL text box.\nSharePoint folder selection.\n3. Select OK to continue.\n4. If this is the first time you've visited this site address, select the appropriate authentication method. Enter your credentials and choose which\nlevel to apply these settings to. Then select Connect.\n5. When you select the SharePoint folder you want to use, the file information about all of the files in that SharePoint folder are displayed. In\naddition, file information about any files in any subfolders is also displayed.\n6. Select Combine & Transform Data to combine the data in the files of the selected SharePoint folder and load the data into the Power Query\nEditor for editing. Or select Combine & Load to load the data from all of the files in the SharePoint folder directly into your app.\nReference:",
    communityVote: "A (82%)",
    isPremium: false
  },
  {
    id: 8,
    topic: "Topic 1",
    type: "dragdrop",
    question: "You have a Microsoft Excel workbook that contains two sheets named Sheet1 and Sheet2.\nSheet1 contains the following table named Table1.\nSheet2 contains the following table named Table2.\nYou need to use Power Query Editor to combine the products from Table1 and Table2 into the following table that has one column containing no\nduplicate values.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    options: [],
    correctAnswer: "",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 9,
    topic: "Topic 1",
    type: "mcq",
    question: "You have a CSV file that contains user complaints. The file contains a column named Logged. Logged contains the date and time each complaint\noccurred. The data in Logged is in the following format: 2018-12-31 at 08:59.\nYou need to be able to analyze the complaints by the logged date and use a built-in date hierarchy.\nWhat should you do?",
    options: [
      "A. Apply a transformation to extract the last 11 characters of the Logged column and set the data type of the new column to Date.",
      "B. Change the data type of the Logged column to Date.",
      "C. Split the Logged column by using at as the delimiter.",
      "D. Apply a transformation to extract the first 11 characters of the Logged column."
    ],
    correctAnswer: "D",
    explanation: "Extract the date, which is the first 11 characters.\nCSV files have no data types.\nNote: A CSV is a comma-separated values file, which allows data to be saved in a tabular format. CSVs look like a garden-variety spreadsheet\nbut with a . csv extension. CSV files can be used with most any spreadsheet program, such as Microsoft Excel or Google Spreadsheets.\nReference:",
    communityVote: "C (95%)",
    isPremium: false
  },
  {
    id: 10,
    topic: "Topic 1",
    type: "mcq",
    question: "You have a Microsoft Excel file in a Microsoft OneDrive folder.\nThe file must be imported to a Power BI dataset.\nYou need to ensure that the dataset can be refreshed in powerbi.com.\nWhich two connectors can you use to connect to the file? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    options: [
      "A. Excel Workbook",
      "B. Text/CSV",
      "C. Folder",
      "D. SharePoint folder",
      "E. Web"
    ],
    correctAnswer: "AC",
    explanation: "A: Connect to an Excel workbook from Power Query Desktop\nTo make the connection from Power Query Desktop:\n1. Select the Excel option in the connector selection.\n2. Browse for and select the Excel workbook you want to load. Then select Open.\n3. Etc.\nC: Folder connector capabilities supported\nFolder path -\nCombine -\nCombine and load -\nCombine and transform -\nConnect to a folder from Power Query Online\nTo connect to a folder from Power Query Online:\n1. Select the Folder option in the connector selection.\n2. Enter the path to the folder you want to load.\nNote:\nReference:",
    communityVote: "DE (92%)",
    isPremium: false
  },
  {
    id: 11,
    topic: "Topic 1",
    type: "hotspot",
    question: "You have two CSV files named Products and Categories.\nThe Products file contains the following columns:\n✑ ProductID\n✑ ProductName\n✑ SupplierID\n✑ CategoryID\nThe Categories file contains the following columns:\n✑ CategoryID\n✑ CategoryName\n✑ CategoryDescription\nFrom Power BI Desktop, you import the files into Power Query Editor.\nYou need to create a Power BI dataset that will contain a single table named Product. The Product will table includes the following columns:\n✑ ProductID\n✑ ProductName\n✑ SupplierID\n✑ CategoryID\n✑ CategoryName\n✑ CategoryDescription\nHow should you combine the queries, and what should you do on the Categories query? To answer, select the appropriate options in the answer\narea.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    options: [],
    correctAnswer: "Box 1: Merge -\nThere are two primary ways of combining queries: merging and appending.\n* When you have one or more columns that you'd like to add to another query, you merge the queries.\n* When you have additional rows of data that you'd like to add to an existing query, you append the query.\nBox 2: Disable the query load -\nManaging loading of queries -\nIn many situations, it makes sense to break down your data transformations in multiple queries. One popular example is merging where you\nmerge two queries into one to essentially do a join. In this type of situations, some queries are not relevant to load into Desktop as they are\nintermediate steps, while they are still required for your data transformations to work correctly. For these queries, you can make sure they are\nnot loaded in Desktop by un-checking 'Enable load' in the context menu of the query in Desktop or in the Properties screen:",
    explanation: "Reference:\nbi/connect-data/refresh-include-in-report-refresh",
    communityVote: null,
    isPremium: false
  },
  {
    id: 12,
    topic: "Topic 1",
    type: "mcq",
    question: "You have an Azure SQL database that contains sales transactions. The database is updated frequently.\nYou need to generate reports from the data to detect fraudulent transactions. The data must be visible within five minutes of an update.\nHow should you configure the data connection?",
    options: [
      "A. Add a SQL statement.",
      "B. Set the Command timeout in minutes setting.",
      "C. Set Data Connectivity mode to Import.",
      "D. Set Data Connectivity mode to DirectQuery."
    ],
    correctAnswer: "D",
    explanation: "DirectQuery: No data is imported or copied into Power BI Desktop. For relational sources, the selected tables and columns appear in the Fields\nlist. For multi- dimensional sources like SAP Business Warehouse, the dimensions and measures of the selected cube appear in the Fields list.\nAs you create or interact with a visualization, Power BI Desktop queries the underlying data source, so you're always viewing current data.\nReference:",
    communityVote: "D (100%)",
    isPremium: false
  },
  {
    id: 13,
    topic: "Topic 1",
    type: "dragdrop",
    question: "You have a folder that contains 100 CSV files.\nYou need to make the file metadata available as a single dataset by using Power BI. The solution must NOT store the data of the CSV files.\nWhich three actions should you perform in sequence. To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    options: [],
    correctAnswer: "Step 1: From Power BI Desktop, Select Get Data, and then Select Folder.\nOpen Power BI Desktop and then select Get Data\\More... and choose Folder from the All options on the left.\nEnter the folder path, select OK, and then select Transform data to see the folder's files in Power Query Editor.\nStep 2: From Power Query Editor, expand the Attributes column.\nStep 3: From Power Query Editor, combine the Content column.\nCombine files behavior -\nTo combine binary files in Power Query Editor, select Content (the first column label) and select Home > Combine Files. Or you can just select\nthe Combine Files icon next to Content.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 14,
    topic: "Topic 1",
    type: "mcq",
    question: "A business intelligence (BI) developer creates a dataflow in Power BI that uses DirectQuery to access tables from an on-premises Microsoft SQL\nserver. The\nEnhanced Dataflows Compute Engine is turned on for the dataflow.\nYou need to use the dataflow in a report. The solution must meet the following requirements:\n✑ Minimize online processing operations.\n✑ Minimize calculation times and render times for visuals.\n✑ Include data from the current year, up to and including the previous day.\nWhat should you do?",
    options: [
      "A. Create a dataflows connection that has DirectQuery mode selected.",
      "B. Create a dataflows connection that has DirectQuery mode selected and configure a gateway connection for the dataset.",
      "C. Create a dataflows connection that has Import mode selected and schedule a daily refresh.",
      "D. Create a dataflows connection that has Import mode selected and create a Microsoft Power Automate solution to refresh the data hourly."
    ],
    correctAnswer: "C",
    explanation: "A daily update is adequate.\nWhen you set up a refresh schedule, Power BI connects directly to the data sources using connection information and credentials in the dataset\nto query for updated data, then loads the updated data into the dataset. Any visualizations in reports and dashboards based on that dataset in\nthe Power BI service are also updated.\nReference:",
    communityVote: "C (100%)",
    isPremium: false
  },
  {
    id: 15,
    topic: "Topic 2",
    type: "mcq",
    question: "You are creating a report in Power BI Desktop.\nYou load a data extract that includes a free text field named coll.\nYou need to analyze the frequency distribution of the string lengths in col1. The solution must not affect the size of the model.\nWhat should you do?",
    options: [
      "A. In the report, add a DAX calculated column that calculates the length of col1",
      "B. In the report, add a DAX function that calculates the average length of col1",
      "C. From Power Query Editor, add a column that calculates the length of col1",
      "D. From Power Query Editor, change the distribution for the Column profile to group by length for col1"
    ],
    correctAnswer: "A",
    explanation: "The LEN DAX function returns the number of characters in a text string.\nNote: DAX is a collection of Power BI functions, operators, and constants that can be used in a formula, or expression, to calculate and return\none or more values.\nStated more simply, DAX helps you create new information from data already in your model.\nReference:",
    communityVote: "D (91%)",
    isPremium: false
  },
  {
    id: 16,
    topic: "Topic 2",
    type: "mcq",
    question: "You have a collection of reports for the HR department of your company. The datasets use row-level security (RLS). The company has multiple\nsales regions.\nEach sales region has an HR manager.\nYou need to ensure that the HR managers can interact with the data from their region only. The HR managers must be prevented from changing\nthe layout of the reports.\nHow should you provision access to the reports for the HR managers?",
    options: [
      "A. Publish the reports in an app and grant the HR managers access permission.",
      "B. Create a new workspace, copy the datasets and reports, and add the HR managers as members of the workspace.",
      "C. Publish the reports to a different workspace other than the one hosting the datasets.",
      "D. Add the HR managers as members of the existing workspace that hosts the reports and the datasets."
    ],
    correctAnswer: "A",
    explanation: "Reference:",
    communityVote: "A (100%)",
    isPremium: false
  },
  {
    id: 17,
    topic: "Topic 2",
    type: "mcq",
    question: "You need to provide a user with the ability to add members to a workspace. The solution must use the principle of least privilege.\nWhich role should you assign to the user?",
    options: [
      "A. Viewer",
      "B. Admin",
      "C. Contributor",
      "D. Member"
    ],
    correctAnswer: "D",
    explanation: "Member role allows adding members or other with lower permissions to the workspace.\nReference:",
    communityVote: "D (100%)",
    isPremium: false
  },
  {
    id: 18,
    topic: "Topic 2",
    type: "mcq",
    question: "You have a Power BI query named Sales that imports the columns shown in the following table.\nUsers only use the date part of the Sales_Date field. Only rows with a Status of Finished are used in analysis.\nYou need to reduce the load times of the query without affecting the analysis.\nWhich two actions achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    options: [
      "A. Remove the rows in which Sales[Status] has a value of Canceled.",
      "B. Remove Sales[Sales_Date].",
      "C. Change the data type of Sale[Delivery_Time] to Integer.",
      "D. Split Sales[Sale_Date] into separate date and time columns.",
      "E. Remove Sales[Canceled Date]."
    ],
    correctAnswer: "AD",
    explanation: "A: Removing uninteresting rows will increase query performance.\nD: Splitting the Sales_Date column will make comparisons on the Sales date faster.",
    communityVote: "AE (54%)",
    isPremium: false
  },
  {
    id: 19,
    topic: "Topic 2",
    type: "mcq",
    question: "You build a report to analyze customer transactions from a database that contains the tables shown in the following table.\nYou import the tables.\nWhich relationship should you use to link the tables?",
    options: [
      "A. one-to-many from Transaction to Customer",
      "B. one-to-one between Customer and Transaction",
      "C. many-to-many between Customer and Transaction",
      "D. one-to-many from Customer to Transaction"
    ],
    correctAnswer: "D",
    explanation: "One on the primary Key side (customer table), many on the foreign key side (Transaction table) of the relation.",
    communityVote: "D (100%)",
    isPremium: false
  },
  {
    id: 20,
    topic: "Topic 2",
    type: "mcq",
    question: "You have a custom connector that returns ID, From, To, Subject, Body, and Has Attachments for every email sent during the past year. More than\n10 million records are returned.\nYou build a report analyzing the internal networks of employees based on whom they send emails to.\nYou need to prevent report recipients from reading the analyzed emails. The solution must minimize the model size.\nWhat should you do?",
    options: [
      "A. From Model view, set the Subject and Body columns to Hidden.",
      "B. Remove the Subject and Body columns during the import.",
      "C. Implement row-level security (RLS) so that the report recipients can only see results based on the emails they sent."
    ],
    correctAnswer: "B",
    explanation: "The Subject and the Body are not needed in the report. Dropping them resolves the security problem and minimizes the model.",
    communityVote: "B (100%)",
    isPremium: false
  },
  {
    id: 21,
    topic: "Topic 2",
    type: "hotspot",
    question: "You have a Power BI model that contains a table named Sales and a related date table. Sales contains a measure named Total Sales.\nYou need to create a measure that calculates the total sales from the equivalent month of the previous year.\nHow should you complete the calculation? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    options: [],
    correctAnswer: "Box 1: CALCULATE -\nBox 2: PARALLELPERIOD -\nPARALLELPERIOD returns a table that contains a column of dates that represents a period parallel to the dates in the specified dates column, in\nthe current context, with the dates shifted a number of intervals either forward in time or back in time.\nSyntax: PARALLELPERIOD(<dates>,<number_of_intervals>,<interval>) dates: A column that contains dates. interval: The interval by which to\nshift the dates. The value for interval can be one of the following: year, quarter, month.\nIncorrect:\nSAMEPERIODLASTYEAR returns a table that contains a column of dates shifted one year back in time from the dates in the specified dates\ncolumn, in the current context.\nSyntax: SAMEPERIODLASTYEAR(<dates>)\nDATESMTD returns a table that contains a column of the dates for the month to date, in the current context.\nSyntax: DATESMTD(<dates>)\nBox 3: 'DATE' [Month]",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 22,
    topic: "Topic 2",
    type: "dragdrop",
    question: "You plan to create a report that will display sales data from the last year for multiple regions.\nYou need to restrict access to individual rows of the data on a per region-basis by using roles.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    options: [],
    correctAnswer: "You can define roles and rules within Power BI Desktop. When you publish to Power BI, it also publishes the role definitions.\nTo define security roles, follow these steps.\n1. Import data into your Power BI Desktop report (Step 1)\n2. From the Modeling tab, select Manage Roles.\n3. From the Manage roles window, select Create. (Step 2)\n4. Under Roles, provide a name for the role.\n5. Under Tables, select the table to which you want to apply a DAX rule.\n6. In the Table filter DAX expression box, enter the DAX expressions. This expression returns a value of true or false. For example: [Entity ID] =\n\"Value\"(Step 3)\n7. After you've created the DAX expression, select the checkmark above the expression box to validate the expression.\n8. Select Save.\nStep 3: Assign Users to the role.\nYou can't assign users to a role within Power BI Desktop. You assign them in the Power BI service.\nAfter you've created your roles, test the results of the roles within Power BI Desktop.\nStep 4: Publish the report.\nNow that you're done validating the roles in Power BI Desktop, go ahead and publish your report to the Power BI service.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 23,
    topic: "Topic 2",
    type: "dragdrop",
    question: "You create a data model in Power BI.\nReport developers and users provide feedback that the data model is too complex.\nThe model contains the following tables.\nThe model has the following relationships:\n✑ There is a one-to-one relationship between Sales_Region and Region_Manager.\n✑ There are more records in Manager than in Region_Manager, but every record in Region_Manager has a corresponding record in Manager.\n✑ There are more records in Sales_Manager than in Sales_Region, but every record in Sales_Region has a corresponding record in\nSales_Manager.\nYou need to denormalize the model into a single table. Only managers who are associated to a sales region must be included in the reports.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nNOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.\nSelect and Place:",
    options: [],
    correctAnswer: "Step 1: Merge [Sales_Region] and [Sales_Manager] by using an inner join.\nInner Join: Returns the rows present in both Left and right table only if there is a match. Otherwise, it returns zero records.\nNote: Sales_Region and Sales_manager\nThere is a one-to-one relationship between Sales_Region and Region_Manager.\nThere are more records in Sales_Manager than in Sales_Region, but every record in Sales_Region has a corresponding record in Sales_Manager.\nStep 2: Merge [Region_Manager] and [Manager] by using inner join.\nOnly managers who are associated to a sales region must be included in the reports.\nNote: Region_Manager and Manager.\nThere are more records in Manager than in Region_Manager, but every record in Region_Manager has a corresponding record in Manager.\nStep 3: Merge [Sales_region] and [Region_Manager] by using a right join as new query named [Sales_region_and_Region_Manager]",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 24,
    topic: "Topic 2",
    type: "mcq",
    question: "You have a Microsoft Power BI report. The size of PBIX file is 550 MB. The report is accessed by using an App workspace in shared capacity of\npowerbi.com.\nThe report uses an imported dataset that contains one fact table. The fact table contains 12 million rows. The dataset is scheduled to refresh\ntwice a day at 08:00 and 17:00.\nThe report is a single page that contains 15 AppSource visuals and 10 default visuals.\nUsers say that the report is slow to load the visuals when they access and interact with the report.\nYou need to recommend a solution to improve the performance of the report.\nWhat should you recommend?",
    options: [
      "A. Change any DAX measures to use iterator functions.",
      "B. Enable visual interactions.",
      "C. Replace the default visuals with AppSource visuals.",
      "D. Split the visuals onto multiple pages."
    ],
    correctAnswer: "D",
    explanation: "One page with many visuals may also make your report loading slow. Please appropriately reduce the number of visualizations on one page.\nReference:",
    communityVote: "D (100%)",
    isPremium: false
  },
  {
    id: 25,
    topic: "Topic 2",
    type: "mcq",
    question: "You have a Microsoft Power BI data model that contains three tables named Orders, Date, and City. There is a one-to-many relationship between\nDate and\nOrders and between City and Orders.\nThe model contains two row-level security (RLS) roles named Role1 and Role2. Role1 contains the following filter.\nCity[State Province] = \"Kentucky\"\nRole2 contains the following filter.\nDate[Calendar Year] = 2020 -\nIf a user is a member of both Role1 and Role2, what data will they see in a report that uses the model?",
    options: [
      "A. The user will see data for which the State Province value is Kentucky or where the Calendar Year is 2020.",
      "B. The user will receive an error and will not be able to see the data in the report.",
      "C. The user will only see data for which the State Province value is Kentucky.",
      "D. The user will only see data for which the State Province value is Kentucky and the Calendar Year is 2020."
    ],
    correctAnswer: "D",
    explanation: "Row-level security (RLS) with Power BI can be used to restrict data access for given users. Filters restrict data access at the row level, and you\ncan define filters within roles.\nBoth Roles are applied, and both role filters must be met.\nIncorrect:\nNot B: A model relationship is limited when there's no guaranteed \"one\" side. You get an error message if you belong to multiple RLS roles and\nat least one of the roles relies on a limited relationship. But here both relationships have a guaranteed 1 side.\nReference:",
    communityVote: "A (81%)",
    isPremium: false
  },
  {
    id: 26,
    topic: "Topic 2",
    type: "mcq",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are modeling data by using Microsoft Power BI. Part of the data model is a large Microsoft SQL Server table named Order that has more than\n100 million records.\nDuring the development process, you need to import a sample of the data from the Order table.\nSolution: From Power Query Editor, you import the table and then add a filter step to the query.\nDoes this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswer: "B",
    explanation: "This would load the entire table in the first step.\nInstead: You add a WHERE clause to the SQL statement.\nReference:",
    communityVote: "B (64%)",
    isPremium: false
  },
  {
    id: 27,
    topic: "Topic 2",
    type: "mcq",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are modeling data by using Microsoft Power BI. Part of the data model is a large Microsoft SQL Server table named Order that has more than\n100 million records.\nDuring the development process, you need to import a sample of the data from the Order table.\nSolution: You write a DAX expression that uses the FILTER function.\nDoes this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswer: "B",
    explanation: "Instead: You add a WHERE clause to the SQL statement.\nNote: DAX is not a language designed to fetch the data like SQL rather than used for data analysis purposes. It is always a better and\nrecommended approach to transform the data as close to the data source itself. For example, your data source is a relational database; then,\nit's better to go with T-SQL.\nSQL is a structured query language, whereas DAX is a formula language used for data analysis purposes. When our data is stored in some\nstructured database systems like SQL server management studio, MySQL, or others, we have to use SQL to fetch the stored data.\nReference:",
    communityVote: "B (100%)",
    isPremium: false
  },
  {
    id: 28,
    topic: "Topic 2",
    type: "mcq",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are modeling data by using Microsoft Power BI. Part of the data model is a large Microsoft SQL Server table named Order that has more than\n100 million records.\nDuring the development process, you need to import a sample of the data from the Order table.\nSolution: You add a WHERE clause to the SQL statement.\nDoes this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswer: "A",
    explanation: "Power Query enables you to specify your native database query in a text box under Advanced options when connecting to a database. In the\nexample below, you'll import data from a SQL Server database using a native database query entered in the SQL statement text box.\n1. Connect to a SQL Server database using Power Query. Select the SQL Server database option in the connector selection.\n2. In the SQL Server database popup window:\n3. Specify the Server and Database where you want to import data from using native database query.\n4. Under Advanced options, select the SQL statement field and paste or enter your native database query, then select OK.\nReference:",
    communityVote: "A (100%)",
    isPremium: false
  },
  {
    id: 29,
    topic: "Topic 2",
    type: "hotspot",
    question: "You are creating an analytics report that will consume data from the tables shown in the following table.\nThere is a relationship between the tables.\nThere are no reporting requirements on employee_id and employee_photo.\nYou need to optimize the data model.\nWhat should you configure for employee_id and employee_photo? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    options: [],
    correctAnswer: "Box 1: Hide -\nNeed in the relation, so cannot delete it.\nBox 2: Delete -",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 30,
    topic: "Topic 2",
    type: "hotspot",
    question: "You plan to create Power BI dataset to analyze attendance at a school. Data will come from two separate views named View1 and View2 in an\nAzure SQL database.\nView1 contains the columns shown in the following table.\nView2 contains the columns shown in the following table.\nThe views can be related based on the Class ID column.\nClass ID is the unique identifier for the specified class, period, teacher, and school year. For example, the same class can be taught by the same\nteacher during two different periods, but the class will have a different class ID.\nYou need to design a star schema data model by using the data in both views. The solution must facilitate the following analysis:\n✑ The count of classes that occur by period\n✑ The count of students in attendance by period by day\n✑ The average number of students attending a class each month\nIn which table should you include the Teacher First Name and Period Number fields? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    options: [],
    correctAnswer: "Box 1: Teacher fact -\nFact tables store observations or events, and can be sales orders, stock balances, exchange rates, temperatures, etc. A fact table contains\ndimension key columns that relate to dimension tables, and numeric measure columns.\nNote: Star schema is a mature modeling approach widely adopted by relational data warehouses. It requires modelers to classify their model\ntables as either dimension or fact.\nBox 2: Attendance fact -\nIncorrect:\n—\nDimension tables describe business entities\nthe things you model. Entities can include products, people, places, and concepts including time itself. The most consistent table you'll find in a\nstar schema is a date dimension table. A dimension table contains a key column (or columns) that acts as a unique identifier, and descriptive\ncolumns.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 31,
    topic: "Topic 2",
    type: "mcq",
    question: "In Power BI Desktop, you are building a sales report that contains two tables. Both tables have row-level security (RLS) configured.\nYou need to create a relationship between the tables. The solution must ensure that bidirectional cross-filtering honors the RLS settings.\nWhat should you do?",
    options: [
      "A. Create an inactive relationship between the tables and select Apply security filter in both directions.",
      "B. Create an active relationship between the tables and select Apply security filter in both directions.",
      "C. Create an inactive relationship between the tables and select Assume referential integrity.",
      "D. Create an active relationship between the tables and select Assume referential integrity."
    ],
    correctAnswer: "B",
    explanation: "By default, row-level security filtering uses single-directional filters, whether the relationships are set to single direction or bi-directional. You\ncan manually enable bi-directional cross-filtering with row-level security by selecting the relationship and checking the Apply security filter in\nboth directions checkbox. Select this option when you've also implemented dynamic row-level security at the server level, where row-level\nsecurity is based on username or login ID.\nReference:",
    communityVote: "B (100%)",
    isPremium: false
  },
  {
    id: 32,
    topic: "Topic 2",
    type: "hotspot",
    question: "You have a Power BI report.\nYou have the following tables.\nYou have the following DAX measure.\nAccounts :=\nCALCULATE (\nDISTINCTCOUNT (Balances[AccountID]),\nLASTDATE ('Date'[Date])\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    options: [],
    correctAnswer: "Box 1: No -\nIt will show the total number of accounts that were live at the last day of the year only.\nNote:\nDISTINCTCOUNT counts the number of distinct values in a column.\nLASTDATE returns the last date in the current context for the specified column of dates.\nBox 2: No -\nIt will show the total number of accounts that were live at the last day of the month only.\nBox 3: Yes -",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 33,
    topic: "Topic 2",
    type: "mcq",
    question: "You have the tables shown in the following table.\nThe Impressions table contains approximately 30 million records per month.\nYou need to create an ad analytics system to meet the following requirements:\n✑ Present ad impression counts for the day, campaign, and site_name. The analytics for the last year are required.\nMinimize the data model size.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    options: [
      "A. Create one-to-many relationships between the tables.",
      "B. Group the Impressions query in Power Query by Ad_id, Site_name, and Impression_date. Aggregate by using the CountRows function.",
      "C. Create a calculated table that contains Ad_id, Site_name, and Impression_date.",
      "D. Create a calculated measure that aggregates by using the COUNTROWS function."
    ],
    correctAnswer: "AB",
    explanation: "Incorrect:\nNot C: A calculated table would increase the data model size.\nNot D: Need Impression_date etc.",
    communityVote: "AB (100%)",
    isPremium: false
  },
  {
    id: 34,
    topic: "Topic 2",
    type: "hotspot",
    question: "You are creating a Microsoft Power BI data model that has the tables shown in the following table.\nThe Products table is related to the ProductCategory table through the ProductCategoryID column. Each product has one product category.\nYou need to ensure that you can analyze sales by product category.\nHow should you configure the relationship from ProductCategory to Products? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    options: [],
    correctAnswer: "Box 1: One-to-many -\nThe one-to-many and many-to-one cardinality options are essentially the same, and they're also the most common cardinality types.\nIncorrect: A many-to-many relationship means both columns can contain duplicate values. This cardinality type is infrequently used. It's\ntypically useful when designing complex model requirements. You can use it to relate many-to-many facts or to relate higher grain facts. For\nexample, when sales target facts are stored at product category level and the product dimension table is stored at product level.\nBox 2: Single -\nIncorrect:\nBear in mind that bi-directional relationships can impact negatively on performance. Further, attempting to configure a bi-directional\nrelationship could result in ambiguous filter propagation paths. In this case, Power BI Desktop may fail to commit the relationship change and\nwill alert you with an error message.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 35,
    topic: "Topic 2",
    type: "mcq",
    question: "You import a Power BI dataset that contains the following tables:\n✑ Date\n✑ Product\n✑ Product Inventory\nThe Product Inventory table contains 25 million rows. A sample of the data is shown in the following table.\nThe Product Inventory table relates to the Date table by using the DateKey column. The Product Inventory table relates to the Product table by\nusing the\nProductKey column.\nYou need to reduce the size of the data model without losing information.\nWhat should you do?",
    options: [
      "A. Change Summarization for DateKey to Don't Summarize.",
      "B. Remove the relationship between Date and Product Inventory",
      "C. Change the data type of UnitCost to Integer.",
      "D. Remove MovementDate."
    ],
    correctAnswer: "A",
    explanation: "The DateKey and MovementDate columns have the same information. Movementdate can be removed.\nIncorrect:\nNot C: Integer data type would lose data.",
    communityVote: "D (98%)",
    isPremium: false
  },
  {
    id: 36,
    topic: "Topic 2",
    type: "hotspot",
    question: "You are enhancing a Power BI model that has DAX calculations.\nYou need to create a measure that returns the year-to-date total sales from the same date of the previous calendar year.\nWhich DAX functions should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    options: [],
    correctAnswer: "Box 1: CALCULATE -\nExample:\nTotal sales on the last selected date =\nCALCULATE (\nSUM ( Sales[Sales Amount] ),\n'Sales'[OrderDateKey] = MAX ( 'Sales'[OrderDateKey] )\n)\nBox 2: SUM -\nBox 3: SAMEPERIODLASTYEAR -\nSAMEPERIODLASTYEAR returns a set of dates in the current selection from the previous year.\nExample:\n-- SAMEPERIODLASTYEAR returns the selected period shifted back one year.\nEVALUATE -\nVAR StartDate = DATE ( 2008, 07, 25 )\nVAR EndDate = DATE ( 2008, 07, 31 )\nRETURN -\nCALCULATETABLE (\nSAMEPERIODLASTYEAR ( 'Date'[Date] ),\n'Date'[Date] >= StartDate &&\n'Date'[Date] <= EndDate\n)\nORDER BY [Date]",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 37,
    topic: "Topic 2",
    type: "mcq",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are modeling data by using Microsoft Power BI. Part of the data model is a large Microsoft SQL Server table named Order that has more than\n100 million records.\nDuring the development process, you need to import a sample of the data from the Order table.\nSolution: You add a report-level filter that filters based on the order date.\nDoes this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswer: "B",
    explanation: "You want the raw data, not a report with the data.\nInstead add a WHERE clause to the SQL statement.\nReference:",
    communityVote: "B (85%)",
    isPremium: false
  },
  {
    id: 38,
    topic: "Topic 2",
    type: "mcq",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a Power BI report that imports a date table and a sales table from an Azure SQL database data source. The sales table has the following\ndate foreign keys:\n✑ Due Date\n✑ Order Date\n✑ Delivery Date\nYou need to support the analysis of sales over time based on all the date foreign keys.\nSolution: For each date foreign key, you add inactive relationships between the sales table and the date table.\nDoes this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswer: "B",
    explanation: "Instead: Solution: From the Fields pane, you rename the date table as Due Date. You use a DAX expression to create Order Date and Delivery\nDate as calculated tables.\nReference:",
    communityVote: "B (78%)",
    isPremium: false
  },
  {
    id: 39,
    topic: "Topic 2",
    type: "mcq",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a Power BI report that imports a date table and a sales table from an Azure SQL database data source. The sales table has the following\ndate foreign keys:\n✑ Due Date\n✑ Order Date\n✑ Delivery Date\nYou need to support the analysis of sales over time based on all the date foreign keys.\nSolution: From Power Query Editor, you rename the date query as Due Date. You reference the Due Date query twice to make the queries for Order\nDate and\nDelivery Date.\nDoes this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswer: "B",
    explanation: "Instead: Solution: From the Fields pane, you rename the date table as Due Date. You use a DAX expression to create Order Date and Delivery\nDate as calculated tables.\nReference:",
    communityVote: "B (58%)",
    isPremium: false
  },
  {
    id: 40,
    topic: "Topic 2",
    type: "mcq",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a Power BI report that imports a date table and a sales table from an Azure SQL database data source. The sales table has the following\ndate foreign keys:\n✑ Due Date\n✑ Order Date\n✑ Delivery Date\nYou need to support the analysis of sales over time based on all the date foreign keys.\nSolution: From the Fields pane, you rename the date table as Due Date. You use a DAX expression to create Order Date and Delivery Date as\ncalculated tables.\nDoes this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswer: "A",
    explanation: "Refactoring methodology -\nHere's a methodology to refactor a model from a single role-playing dimension-type table, to a design with one table per role.\n1. Remove any inactive relationships.\n2. Consider renaming the role-playing dimension-type table to better describe its role. In the example (not present here), the Airport table is\nrelated to the\nArrivalAirport column of the Flight table, so it's renamed as Arrival Airport.\n3. Create a copy of the role-playing table, providing it with a name that reflects its role. If it's an Import table, we recommend defining a\ncalculated table. If it's a\nDirectQuery table, you can duplicate the Power Query query.\nIn the example, the Departure Airport table was created by using the following calculated table definition.\nDeparture Airport = 'Arrival Airport'\nCreate an active relationship to relate the new table.\n4. Consider renaming the columns in the tables so they accurately reflect their role. In the example, all columns are prefix  ed with the word\nDeparture or Arrival.\nThese names ensure report visuals, by default, will have self-describing and non-ambiguous labels. It also improves the Q&A experience,\nallowing users to easily write their questions.\n5. Consider adding descriptions to role-playing tables. (In the Fields pane, a description appears in a tooltip when a report author hovers their\ncursor over the table.) This way, you can communicate any additional filter propagation details to your report authors.\nReference:",
    communityVote: "A (100%)",
    isPremium: false
  },
  {
    id: 41,
    topic: "Topic 2",
    type: "hotspot",
    question: "You are building a financial report by using Power BI.\nYou have a table named financials that contains a column named Date and a column named Sales.\nYou need to create a measure that calculates the relative change in sales as compared to the previous quarter.\nHow should you complete the measure? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    options: [],
    correctAnswer: "Box 1: CALCULATE -\nCalculate the sum.\nBox 2: DATEADD -\nDATEADD -1 QUARTER will give the previous month.\nBox 3: DIVIDE -\nUse DIVIDE to get the relative change.",
    explanation: "",
    communityVote: null,
    isPremium: false
  },
  {
    id: 42,
    topic: "Topic 2",
    type: "dragdrop",
    question: "You are creating a Power BI model and report.\nYou have a single table in a data model named Product. Product contains the following fields:\n✑ ID\n✑ Name\n✑ Color\n✑ Category\n✑ Total Sales\nYou need to create a calculated table that shows only the top eight products based on the highest value in Total Sales.\nHow should you complete the DAX expression? To answer, drag the appropriate values to the correct targets. Each value may be used once, more\nthan once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nSelect and Place:",
    options: [],
    correctAnswer: "Box 1: TOPN -\nTOPN returns the top N rows of the specified table.\nSyntax: TOPN(<n_value>, <table>, <orderBy_expression>, [<order>[, <orderBy_expression>, [<order>]]...])\nBox 2: DESC -\nDescending order to get the highest values first.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 43,
    topic: "Topic 2",
    type: "mcq",
    question: "You are creating a sales report in Power BI for the NorthWest region sales territory of your company. Data will come from a view in a Microsoft\nSQL Server database. A sample of the data is shown in the following table:\nThe report will facilitate the following analysis:\n✑ The count of orders and the sum of total sales by Order Date\n✑ The count of customers who placed an order\n✑ The average quantity per order\nYou need to reduce data refresh times and report query times.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    options: [
      "A. Set the data type for SalesOrderNumber to Decimal Number.",
      "B. Remove the CustomerKey and ProductKey columns.",
      "C. Remove the TaxAmt and Freight columns.",
      "D. Filter the data to only the NorthWest region sales territory."
    ],
    correctAnswer: "CD",
    explanation: "C: Remove columns that are not used in the report.\nD: Reduce the number of rows.\nIncorrect:\nNot A: Not possible.\nNot B: Need CustomerKey to count of customers who placed an order",
    communityVote: "CD (100%)",
    isPremium: false
  },
  {
    id: 44,
    topic: "Topic 2",
    type: "mcq",
    question: "You are creating a Power BI model that contains a table named Store. Store contains the following fields.\nYou plan to create a map visual that will show store locations and provide the ability to drill down from Country to State/Province to City.\nWhat should you do to ensure that the locations are mapped properly?",
    options: [
      "A. Change the data type of City, State/Province, and Country.",
      "B. Set Summarization for City, State/Province, and Country to Don't summarize.",
      "C. Set the data category of City, State/Province, and Country.",
      "D. Create a calculated column that concatenates the values in City, State/Province, and Country."
    ],
    correctAnswer: "C",
    explanation: "A hierarchy is a set of fields categorized in a hierarchical way that one level is the parent of another level. Values of the parent level can be\ndrilled down to the lower level.\nCreate Hierarchy -\nRight-click on the field you want to set as level 1 of the hierarchy in the fields list, and then select Create Hierarchy.\nAfter that, you will see a new hierarchy created named your field name \"Category\" plus the word \"Hierarchy\". This would have a hierarchy\nicon beside it and also an option to expand to the fields of the hierarchy. If you expand, you will see a copy of the Category field in there too.\nEtc.\nReference:",
    communityVote: "C (100%)",
    isPremium: false
  },
  {
    id: 45,
    topic: "Topic 2",
    type: "dragdrop",
    question: "You need create a date table in Power BI that must contain 10 full calendar years, including the current year.\nHow should you complete the DAX expression? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    options: [],
    correctAnswer: "Box 1: YEAR -\nGet the current year.\nBox 2: TODAY -\nTODAY returns the current date.\nBox 3: CALENDAR -\nCALENDAR returns a table with a single column named \"Date\" containing a contiguous set of dates. The range of dates is from the specified\nstart date to the specified end date, inclusive of those two dates.\nThe following formula returns a table with dates between January 1st, 2005 and December 31st, 2015.\nCALENDAR (\nDATE ( 2005, 1, 1 ),\nDATE ( 2015, 12, 31 )",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 46,
    topic: "Topic 2",
    type: "mcq",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a Power BI report that imports a date table and a sales table from an Azure SQL database data source. The sales table has the following\ndate foreign keys:\n✑ Due Date\n✑ Order Date\n✑ Delivery Date\nYou need to support the analysis of sales over time based on all the date foreign keys.\nSolution: You create measures that use the USERELATIONSHIP DAX function to filter sales on the active relationship between the sales table and\nthe date table.\nDoes this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswer: "B",
    explanation: "Instead: Solution: From the Fields pane, you rename the date table as Due Date. You use a DAX expression to create Order Date and Delivery\nDate as calculated tables.\nReference:",
    communityVote: "B (100%)",
    isPremium: false
  },
  {
    id: 47,
    topic: "Topic 2",
    type: "hotspot",
    question: "You have a Power BI report that contains a measure named Total Sales.\nYou need to create a new measure that will return the sum of Total Sales for a year up to a selected date.\nHow should you complete the DAX expression? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    options: [],
    correctAnswer: "Box 1: TOTALYTD -\nTOTALYTD evaluates the specified expression over the interval which begins on the first day of the year and ends with the last date in the\nspecified date column after applying specified filters.\nSyntax: TOTALYTD (\n<Expression>,\n<Dates>\n[, <Filter>]\n[, <YearEndDate>]\nExpression - The expression to be evaluated.\nDates - The name of a column containing dates or a one column table containing dates.\nExample:\nTOTALYTD ( -- 2007-01-01 : 2007-05-12\n[Sales Amount],\n'Date'[Date]\nBox 2: 'Date'[Date]",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 48,
    topic: "Topic 2",
    type: "dragdrop",
    question: "You are modifying a Power BI model by using Power BI Desktop.\nYou have a table named Sales that contains the following fields.\nYou have a table named Transaction Size that contains the following data.\nYou need to create a calculated column to classify each transaction as small, medium, or large based on the value in Sales Amount.\nHow should you complete the code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once,\nor not at all.\nYou may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    options: [],
    correctAnswer: "Box 1: CALCULATE -\nCALCULATE evaluates an expression in a modified filter context.\nSyntax: CALCULATE(<expression>[, <filter1> [, <filter2> [, ...]]])\nThe expression used as the first parameter is essentially the same as a measure.\nFilters can be:\nBoolean filter expressions -\nTable filter expressions -\nFilter modification functions -\nTable filter expression -\nA table expression filter applies a table object as a filter. It could be a reference to a model table, but more likely it's a function that returns a\ntable object. You can use the FILTER function to apply complex filter conditions, including those that cannot be defined by a Boolean filter\nexpression.\nBox 2: AND -\nBox 3: FILTER -\nFILTER returns a table that represents a subset of another table or expression.\nSyntax: FILTER(<table>,<filter>)\nNote: DISTINCT returns a one-column table that contains the distinct values from the specified column. In other words, duplicate values are\nremoved and only unique values are returned.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 49,
    topic: "Topic 2",
    type: "mcq",
    question: "You have a Power BI report for the procurement department. The report contains data from the following tables.\nThere is a one-to-many relationship from Suppliers to LineItems that uses the ID and Supplier ID columns.\nThe report contains the visuals shown in the following table.\nYou need to minimize the size of the dataset without affecting the visuals.\nWhat should you do?",
    options: [
      "A. Merge Suppliers and LineItems.",
      "B. Remove the LineItems[Description] column.",
      "C. Remove the rows from LineItems where LineItems[Invoice Date] is before the beginning of last month.",
      "D. Group LineItems by LineItems[Invoice ID] and LineItems[Invoice Date] with a sum of LineItems[Price]."
    ],
    correctAnswer: "B",
    explanation: "Remove a column that is not used in the visuals reduces the size of the dataset.\nIncorrect:\nNot A: Merging the tables would increase the dataset.\nNot C: Two of the visuals need historical data.\nNot D: Grouping would not affect size.",
    communityVote: "B (94%)",
    isPremium: false
  },
  {
    id: 50,
    topic: "Topic 2",
    type: "mcq",
    question: "You have a Power BI report for the marketing department. The report reports on web traffic to a blog and contains data from the following tables.\nThere is a one-to-many relationship from Posts to Traffic that uses the URL and URL Visited columns.\nThe report contains the visuals shown in the following table.\nThe dataset takes a long time to refresh.\nYou need to modify Posts and Traffic queries to reduce load times.\nWhich two actions will reduce the load times? Each correct answer presents part of the solution.\nNOTE:\nEach correct selection is worth one point.",
    options: [
      "A. Remove the rows in Posts in which Posts[Publish Date] is in the last seven days.",
      "B. Remove the rows in Traffic in which Traffic[URL Visited] does not contain \"blog\".",
      "C. Remove Traffic[IP Address], Traffic[Browser Agent], and Traffic[Referring URL].",
      "D. Remove Posts[Full Text] and Posts[Summary].",
      "E. Remove the rows in Traffic in which Traffic[Referring URL] does not start with ג/€\"."
    ],
    correctAnswer: "BD",
    explanation: "B: Only blog posts rows are useful for the visuals.\nD: These two columns are not used in the visuals and can be removed.\nIncorrect:\nNot A: Three visuals need historical data.\nNot C: Traffic[Referring URL] is used in one of the visuals and therefore cannot be removed.\nNot E: These rows are used in 3 visuals.",
    communityVote: "BD (100%)",
    isPremium: false
  },
  {
    id: 51,
    topic: "Topic 3",
    type: "dragdrop",
    question: "You have a Microsoft Excel spreadsheet that contains the data shown in the following table.\nYou plan to build a data model for a Power BI report.\nYou need to prepare the data so that it is available to the model in the format shown in the following table.\nWhich three actions should you perform in sequence in Power Query Editor? To answer, move the appropriate actions from the list of actions to\nthe answer area and arrange them in the correct order.\nSelect and Place:",
    options: [],
    correctAnswer: "Step 1: Select the [Department] and [Stage] columns and unpivot the other columns.\nWe unpivot the School1, School2, School3, and the School4 columns.\nYou might want to unpivot data, sometimes called fiattening the data, to put it in a matrix format so that all similar values are in one column.\nExample:\nWhen you unpivot, you unpack the attribute-value pairs that represent an intersection point of the new columns and re-orient them into fiattened\ncolumns:\n* Values (in blue on the left) are unpivoted into a new column (in blue on the right).\n* Attributes (in green on the left) are unpivoted into a new column (in green on the right) and duplicates are correspondingly mapped to the new\nValues column.\nStep 2: Rename the [Attribute] column as [School] and the [Value] column as [Score[,\nStep 3: Group by [Department] and [School] and..",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 52,
    topic: "Topic 3",
    type: "mcq",
    question: "You have a report that contains a bar chart and a column chart. The bar chart shows customer count by customer segment. The column chart\nshows sales by month.\nYou need to ensure that when a segment is selected in the bar chart, you see which portion of the total sales for the month belongs to the\ncustomer segment.\nHow should the visual interactions be set on the column chart when the bar chart is selected?",
    options: [
      "A. highlight",
      "B. filter",
      "C. no impact"
    ],
    correctAnswer: "A",
    explanation: "In most visuals, highlighting doesn't remove the unrelated data. Instead it highlights the related data. The rest of the data remains visible but\ndimmed.\nNote: By default, visualizations on a report page can be used to cross-filter and cross-highlight the other visualizations on the page. For\nexample, selecting a state on a map visualization highlights the column chart and filters the line chart to display only data that applies to that\none state.\nIncorrect:\nNot B: Filters remove all but the data you want to focus on.\nReference:",
    communityVote: "A (92%)",
    isPremium: false
  },
  {
    id: 53,
    topic: "Topic 3",
    type: "mcq",
    question: "A user creates a Power BI report named ReportA that uses a custom theme.\nYou create a dashboard named DashboardA.\nYou need to ensure that DashboardA uses the custom theme. The solution must minimize development effort.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    options: [
      "A. Publish ReportA to Power BI.",
      "B. From ReportA save the current theme.",
      "C. Publish ReportA to the Microsoft Power BI Community theme gallery.",
      "D. From DashboardA, create a custom theme.",
      "E. From DashboardA, upload a JSON theme."
    ],
    correctAnswer: "AE",
    explanation: "A: With Power BI Desktop report themes, you can apply design changes to your entire report, such as using corporate colors, changing icon\nsets, or applying new default visual formatting.\nWhen you publish a Power BI Desktop file to the Power BI service, you publish the data in the model to your Power BI workspace. The same is\ntrue for any reports you created in Report view.\nTo publish a Power BI Desktop dataset and reports\n1. In Power BI Desktop, choose File > Publish > Publish to Power BI or select Publish on the ribbon.\nSign in to Power BI, if you aren't already signed in.\n2. Select the destination. You can search your list of available workspaces to find the workspace into which you want to publish. The search box\nlets you filter your workspaces. Select the workspace, and then click the Select button to publish.\n3. Etc.\nE: One way to create a custom theme is to upload a JSON file that has settings for all the colors you'd like to use for your dashboard. In Power\nBI Desktop, report creators use JSON files to create themes for reports. You can upload these same JSON files for dashboards, or find and\nupload JSON files from the Theme gallery page in the Power BI Community.\nYou can also save your custom theme as a JSON file and then share it with other dashboard creators.\nReference:\nreports/service-dashboard-themes",
    communityVote: "BE (100%)",
    isPremium: false
  },
  {
    id: 54,
    topic: "Topic 3",
    type: "mcq",
    question: "You need to create a visualization that compares revenue and cost over time.\nWhich type of visualization should you use?",
    options: [
      "A. waterfall chart",
      "B. stacked area chart",
      "C. line chart",
      "D. donut chart"
    ],
    correctAnswer: "C",
    explanation: "Line charts can have many different lines, for example both revenue and cost over time.\nReference:",
    communityVote: "C (100%)",
    isPremium: false
  },
  {
    id: 55,
    topic: "Topic 3",
    type: "mcq",
    question: "You build a report to help the sales team understand its performance and the drivers of sales.\nThe team needs to have a single visualization to identify which factors affect success.\nWhich type of visualization should you use?",
    options: [
      "A. Key influencers",
      "B. Line and clustered column chart",
      "C. Q&A",
      "D. Funnel chart"
    ],
    correctAnswer: "A",
    explanation: "The key influencers visual helps you understand the factors that drive a metric you're interested in. It analyzes your data, ranks the factors that\nmatter, and displays them as key influencers. For example, suppose you want to figure out what influences employee turnover, which is also\nknown as churn. One factor might be employment contract length, and another factor might be commute time.\nWhen to use key influencers.\nThe key influencers visual is a great choice if you want to:\nSee which factors affect the metric being analyzed.\nContrast the relative importance of these factors. For example, do short-term contracts affect churn more than long-term contracts?\nReference:",
    communityVote: "A (100%)",
    isPremium: false
  },
  {
    id: 56,
    topic: "Topic 3",
    type: "mcq",
    question: "You have a report that contains four pages. Each page contains slicers for the same four fields.\nUsers report that when they select values in a slicer on one page, the selections are not persisted on other pages.\nYou need to recommend a solution to ensure that users can select a value once to filter the results on all the pages.\nWhat are two possible recommendations to achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    options: [
      "A. Create a bookmark for each slicer value.",
      "B. Replace the slicers with report-level filters.",
      "C. Sync the slicers across the pages.",
      "D. Replace the slicers with page-level filters.",
      "E. Replace the slicers with visual-level filters."
    ],
    correctAnswer: "BC",
    explanation: "C: You can sync a slicer and use it on any or all pages in a report.\nB: You can set filters at three different levels for the report: visual-level, page-level, and report-level.\nNote: Suppose you want your report readers to be able to look at overall sales metrics, but also highlight performance for individual district\nmanagers and different time frames. You could create separate reports or comparative charts. You could add filters in the Filters pane. Or you\ncould use slicers. Slicers are another way of filtering. They narrow the portion of the dataset that is shown in the other report visualizations.\nReference:\nbi/visuals/power-bi-visualization-slicers",
    communityVote: "BC (83%)",
    isPremium: false
  },
  {
    id: 57,
    topic: "Topic 3",
    type: "mcq",
    question: "You have a report that includes a card visualization.\nYou need to apply the following conditional formatting to the card while minimizing design effort:\n✑ For values that are greater than or equal to 100, the font of the data label must be dark red.\n✑ For values that are less than 100, the font of the data label must be dark gray.\nWhich type of format should you use?",
    options: [
      "A. Color scale",
      "B. Rules",
      "C. Field value"
    ],
    correctAnswer: "B",
    explanation: "Finding the conditional formatting in the card visual is a bit tricky. There is no separate option for that. You need to go to the Format tab of the\nvisual, and then expand the Data Label. The right beside the Data Label's colour you need to hover your mouse, and you will find a three dots\nicon appearing, which if you click on it, you will see Conditional Formatting.\nNow in the Conditional Formatting tab, you can apply it in different methods. for example, you can choose Rules, and then\nThe Rules mode will give you the ability to put custom roles as below;\nReference:",
    communityVote: "B (100%)",
    isPremium: false
  },
  {
    id: 58,
    topic: "Topic 3",
    type: "dragdrop",
    question: "You have a Power BI dashboard named DashboardA that contains a tile named TileA. TileA contains a treemap visual from a report named\nReportA.\nYou need to provide the users of DashboardA with additional tiles that relate to the contents of TileA.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    options: [],
    correctAnswer: "Step 1: From ReportA, select Get Insights\nThen select 'Get Insights'... From the Datasets + dataflows tab, select More options (...) next to the dataset, and then choose Get insights.\nPower BI Quick Insights will now scan the data related to the tile and display a list of potential insights you may want to explore further. To drill\ninto a specific data point, you can even select data in the visual and Quick Insights will focus on that data point when searching for insights.\nPower BI uses various algorithms to search for trends in your dataset.\nWithin seconds, your insights are ready. Select View insights to display visualizations.\nThe visualizations display in a special Quick Insights canvas with up to 32 separate insight cards. Each card has a chart or graph plus a short\ndescription.\nStep 2: From DashboardA, select the TileA options, and then select View Insights\nThe insight screen opens in Focus mode.\nStep 3: From Focus mode, pin the relevant visuals to DashboardA\nGo to 'in focus mode' on a dashboard tile for data loaded into Power BI.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 59,
    topic: "Topic 3",
    type: "mcq",
    question: "You are creating a dashboard by using the Power BI service.\nYou have an existing report page that contains three charts.\nYou need to add the charts to the dashboard while maintaining the interactivity between the charts.\nWhat should you do?",
    options: [
      "A. Edit interactions in the report and set all interactions to Filter.",
      "B. Pin each chart as a tile.",
      "C. Edit the dashboard theme and pin each chart as a tile.",
      "D. Pin the report page as a live tile."
    ],
    correctAnswer: "D",
    explanation: "One way to add a new dashboard tile is by pinning an entire report page. This is an easy way to pin more than one visualization at a time. Also,\nwhen you pin an entire page, the tiles are live; you can interact with them right there on the dashboard. And changes you make to any of the\nvisualizations back in the report editor, like adding a filter or changing the fields used in the chart, are reflected in the dashboard tile as well.\nPinning live tiles from reports to dashboards is only available in Power BI service (app.powerbi.com).\nReference:",
    communityVote: "D (100%)",
    isPremium: false
  },
  {
    id: 60,
    topic: "Topic 3",
    type: "dragdrop",
    question: "You are using existing reports to build a dashboard that will be viewed frequently in portrait mode on mobile phones.\nYou need to build the dashboard.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    options: [],
    correctAnswer: "Step 1: Edit the dashboard mobile view\nOpen a report in Editing view.\nStep 2: Pin items from the reports to the dashboard\nStep 3: Open the dashboard.\nOpen the dashboard to see the pinned live tile,\nFrom the nav pane, select the dashboard with the new live tile. There, you can do things like rename, resize, link, and move the pinned report\npage.\nStep 4: Rearrange, resize, or remove items from the mobile layout",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 61,
    topic: "Topic 3",
    type: "mcq",
    question: "You are building a Power BI report.\nUsers will view the report by using their mobile device.\nYou need to configure the report to display data based on each user's location.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    options: [
      "A. From Power Query Editor, detect the data types of the relevant columns.",
      "B. In Data Category, set the geographic data category for the relevant columns.",
      "C. Create a hierarchy for columns of the geography data type.",
      "D. Use the columns of the geography data type in all visuals.",
      "E. For the relevant columns, set synonyms to match common geographical terms."
    ],
    correctAnswer: "BD",
    explanation: "B: Identify geographic data in your report\n1. In Power BI Desktop, switch to Data View Data View icon.\n2. Select a column with geographic data — for example, a City column.\n3. On the Modeling tab, select Data Category, then the correct category — in this example, City.\n4. Continue setting geographic data categories for any other fields in the model.\nD: Create visuals with your geographic data\nSwitch to Report view Report View icon, and create visuals that use the geographic fields in your data.\nIn this example, the model also contains a calculated column that brings city and state together in one column.\nPublish the report to the Power BI service.\nReference:",
    communityVote: "BD (75%)",
    isPremium: false
  },
  {
    id: 62,
    topic: "Topic 3",
    type: "mcq",
    question: "You have a report that contains a donut chart and a clustered column chart. Interactions between the visuals use the default settings.\nYou need to modify the report so that when you select a column in the column chart, the donut chart redraws by using the data from the selected\ncolumn.\nWhat should you do?",
    options: [
      "A. Select the donut chart and set the column chart interaction to Filter.",
      "B. Select the column chart and set the donut chart interaction to Filter.",
      "C. Select the donut chart and set the column chart interaction to None.",
      "D. Select the column chart and set the donut chart interaction to None."
    ],
    correctAnswer: "B",
    explanation: "Filters remove all but the data you want to focus on.\nNote: Enable the visual interaction controls.\n1. Select a visualization to make it active.\n2. Display the Visual Interactions options.\n3. In Power BI Desktop, select Format > Edit interactions.\n4. To display the visualization interaction controls, select Edit interactions. Power BI adds filter and highlight icons to all of the other\nvisualizations on the report page.\nWe can see that the tree map is cross-filtering the line chart and the map, and is cross-highlighting the column chart. You can now change how\nthe selected visualization interacts with the other visualizations on the report page.\nReference:",
    communityVote: "B (100%)",
    isPremium: false
  },
  {
    id: 63,
    topic: "Topic 3",
    type: "mcq",
    question: "You are creating a Power BI report by using Power BI Desktop.\nYou need to include a visual that shows trends and other useful information automatically. The visual must update based on selections in other\nvisuals.\nWhich type of visual should you use?",
    options: [
      "A. Q&A",
      "B. smart narrative",
      "C. key influencers",
      "D. decomposition tree"
    ],
    correctAnswer: "B",
    explanation: "The smart narrative visualization helps you quickly summarize visuals and reports. It provides relevant innovative insights that you can\ncustomize.\nUse smart narrative summaries in your reports to address key takeaways, to point out trends, and to edit the language and format for a specific\naudience. In\nPowerPoint, instead of pasting a screenshot of your report's key takeaways, you can add narratives that are updated with every refresh. Your\naudience can use the summaries to understand the data, get to key points faster, and explain the data to others.\nReference:",
    communityVote: "B (100%)",
    isPremium: false
  },
  {
    id: 64,
    topic: "Topic 3",
    type: "dragdrop",
    question: "You have a Microsoft Excel spreadsheet named Excel1 that contains survey results.\nYou have a Power BI dashboard named DashboardA that has Q&A enabled.\nYou need to ensure that users who can access DashboardA can ask questions based on the contents of Excel1 and pin visuals based on their\nqueries to\nDashboardA. The solution must minimize development time.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    options: [],
    correctAnswer: "Step 1: From powerbi.com, upload Excel1.\nUpload your Excel file to the Power BI service.\nThe Power BI service connects to many data sources, including Excel files that live on your computer.\n1. Sign in to the Power BI service.\n2. In My workspace, select New > Upload a file.\n3. Select Local File, browse to where you saved the Financial Sample Excel file, and select Open.\n4. On the Local File page, select Import.\nNow you have a Financial Sample dataset. Power BI also automatically created a blank dashboard. If you don't see the dashboard, refresh your\nbrowser.\nStep 2: From powerbi.com, import Excel1 as a dataset.\nStep 3: From powerbi.com, add a tile for the Excel1 dataset to DashboarA.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 65,
    topic: "Topic 3",
    type: "mcq",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a clustered bar chart that contains a measure named Salary as the value and a field named Employee as the axis. Salary is present in the\ndata as a numerical amount representing US dollars.\nYou need to create a reference line to show which employees are above the median salary.\nSolution: You create a constant line and set the value to .5.\nDoes this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswer: "B",
    explanation: "Instead: You create a percentile line by using the Salary measure and set the percentile to 50%.\nThe median is the middle value or the 50th percentile of a data set.\nReference:",
    communityVote: "B (100%)",
    isPremium: false
  },
  {
    id: 66,
    topic: "Topic 3",
    type: "mcq",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a clustered bar chart that contains a measure named Salary as the value and a field named Employee as the axis. Salary is present in the\ndata as a numerical amount representing US dollars.\nYou need to create a reference line to show which employees are above the median salary.\nSolution: You create an average line by using the Salary measure.\nDoes this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswer: "B",
    explanation: "Average is not Median.\nInstead: You create a percentile line by using the Salary measure and set the percentile to 50%.\nThe median is the middle value or the 50th percentile of a data set.\nReference:",
    communityVote: "B (100%)",
    isPremium: false
  },
  {
    id: 67,
    topic: "Topic 3",
    type: "mcq",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a clustered bar chart that contains a measure named Salary as the value and a field named Employee as the axis. Salary is present in the\ndata as a numerical amount representing US dollars.\nYou need to create a reference line to show which employees are above the median salary.\nSolution: You create a percentile line by using the Salary measure and set the percentile to 50%.\nDoes this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswer: "A",
    explanation: "The median is the middle value or the 50th percentile of a data set.\nReference:",
    communityVote: "A (86%)",
    isPremium: false
  },
  {
    id: 68,
    topic: "Topic 3",
    type: "mcq",
    question: "You have a Power BI report hosted on powerbi.com that displays expenses by department for department managers.\nThe report contains a line chart that shows expenses by month.\nYou need to enable users to choose between viewing the report as a line chart or a column chart. The solution must minimize development and\nmaintenance effort.\nWhat should you do?",
    options: [
      "A. Enable report readers to personalize visuals.",
      "B. Create a separate report page for users to view the column chart.",
      "C. Add a column chart, a bookmark, and a button for users to choose a visual.",
      "D. Create a mobile report that contains a column chart."
    ],
    correctAnswer: "C",
    explanation: "Let users personalize visuals in a report\nEnable personalization in a report\nYou can enable the feature either in Power BI Desktop or the Power BI service. You can also enable it in embedded reports.\nTo enable the feature in the Power BI (powerbi.com) service, go to Settings for your report.\nTurn on Personalize visuals > Save.\nReference:\nreport",
    communityVote: "A (72%)",
    isPremium: false
  },
  {
    id: 69,
    topic: "Topic 3",
    type: "mcq",
    question: "You have two Power BI reports named ReportA and ReportB that each uses a distinct color palette.\nYou are creating a Power BI dashboard that will include two visuals from each report.\nYou need to use a consistent dark theme for the dashboard. The solution must preserve the original colors of the reports.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    options: [
      "A. Upload a snapshot.",
      "B. For the browser, set the color preference to dark mode.",
      "C. When pinning visuals to the dashboard, select Use destination theme.",
      "D. Select the dark dashboard theme.",
      "E. Turn on tile fiow."
    ],
    correctAnswer: "CD",
    explanation: "D: With dashboard themes you can apply a color theme to your entire dashboard, such as corporate colors, seasonal coloring, or any other color\ntheme you might want to apply. When you apply a dashboard theme, all visuals on your dashboard use the colors from your selected theme.\nIn the dashboard pane that appears, select one of the pre-built themes. In the example below, we've selected Dark.\nC: Reports and dashboards with different themes\nIf your report uses a different theme from the dashboard theme, in most cases you can control whether the visual retains the current report\ntheme or uses the dashboard theme.\n* Try re-pinning the tile and selecting Use dashboard theme.\nReference:",
    communityVote: "CD (84%)",
    isPremium: false
  },
  {
    id: 70,
    topic: "Topic 3",
    type: "hotspot",
    question: "You have a dataset that contains revenue data from the past year.\nYou need to use anomaly detection in Power BI to show anomalies in the dataset.\nWhat should you configure? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    options: [],
    correctAnswer: "Box 1: Line -\nAnomaly detection is only supported for line chart visuals containing time series data in the Axis field.\nBox 2: Populate the axis with a date field\nIncorrect:\n* Anomaly Explanations doesn't work with 'Show Value As' options.\n* Drilling down to go to the next level in the hierarchy isn't supported.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 71,
    topic: "Topic 3",
    type: "mcq",
    question: "You have a line chart that shows the number of employees in a department over time.\nYou need to see the total salary costs of the employees when you hover over a data point.\nWhat should you do?",
    options: [
      "A. Add salary to the drillthrough fields.",
      "B. Add salary to the visual filters.",
      "C. Add salary to the tooltips."
    ],
    correctAnswer: "C",
    explanation: "Customize tooltips with aggregation or quick measures\nYou can customize a tooltip by selecting an aggregation function.\nSelect the arrow beside the field in the Tooltips bucket. Then, select from the available options.\nNote: Tooltips are an elegant way of providing more contextual information and detail to data points on a visual. You can customize tooltips in\nPower BI Desktop and in the Power BI service.\nWhen a visualization is created, the default tooltip displays the data point's value and category.\nReference:",
    communityVote: "C (100%)",
    isPremium: false
  },
  {
    id: 72,
    topic: "Topic 3",
    type: "mcq",
    question: "You have the visual shown in the Original exhibit. (Click the Original tab.)\nYou need to configure the visual as shown in the Modified exhibit. (Click the Modified tab.)\nWhat should you add to the visual?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. a measure",
      "B. an Average line",
      "C. a trendline",
      "D. a forecast"
    ],
    correctAnswer: "D",
    explanation: "For example, here's how the current forecast looks like:\nReference:",
    communityVote: "D (100%)",
    isPremium: false
  },
  {
    id: 73,
    topic: "Topic 3",
    type: "mcq",
    question: "Your company has employees in 10 states.\nThe company recently decided to associate each state to one of the following three regions: East, West, and North.\nYou have a data model that contains employee information by state. The model does NOT include region information.\nYou have a report that shows the employees by state.\nYou need to view the employees by region as quickly as possible.\nWhat should you do?",
    options: [
      "A. Create a new aggregation that summarizes by state.",
      "B. Create a new aggregation that summarizes by employee.",
      "C. Create a new group on the state column and set the Group type to List.",
      "D. Create a new group on the state column and set the Group type to Bin."
    ],
    correctAnswer: "C",
    explanation: "In Power BI Desktop, you can group data points to help you more clearly view, analyze, and explore data and trends in your visuals.\nExample:\nIncorrect:\nNot D: You can also define the bin size to put values into equally sized groups that better enable you to visualize data in ways that are\nmeaningful. This action is often called binning.\nReference:",
    communityVote: "C (100%)",
    isPremium: false
  },
  {
    id: 74,
    topic: "Topic 3",
    type: "mcq",
    question: "You have a collection of reports for the HR department of your company.\nYou need to create a visualization for the HR department that shows historical employee counts and predicts trends during the next six months.\nWhich type of visualization should you use?",
    options: [
      "A. ribbon chart",
      "B. scatter chart",
      "C. line chart",
      "D. key influencers"
    ],
    correctAnswer: "C",
    explanation: "The best data for forecasting is time series data or uniformly increasing whole numbers. The line chart has to have only one line.\nReference:",
    communityVote: "C (100%)",
    isPremium: false
  },
  {
    id: 75,
    topic: "Topic 3",
    type: "hotspot",
    question: "You have the Power BI dashboard shown in the Dashboard exhibit. (Click the Dashboard tab.)\nYou need to ensure that when users view the dashboard on a mobile device, the dashboard appears as shown in the Mobile exhibit. (Click the\nMobile tab.)\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [],
    correctAnswer: "Box 1: Report mobile layout -\nPower BI provides a number of features to help you create mobile-optimized versions of your reports:\n* A mobile layout view where you create your mobile-optimized report by dragging and dropping visuals onto a phone emulator canvas.\n* Etc.\nBox 2: The Total Sales by Parent Category tile",
    explanation: "Reference:",
    communityVote: null,
    isPremium: false
  },
  {
    id: 76,
    topic: "Topic 3",
    type: "mcq",
    question: "You are building a Power BI report to analyze customer segments.\nYou need to identify customer segments dynamically based on the Bounce Rate across dimensions such as source, geography, and\ndemographics. The solution must minimize analysis effort.\nWhich type of visualization should you use?",
    options: [
      "A. decomposition tree",
      "B. funnel chart",
      "C. Q&A",
      "D. key influencers"
    ],
    correctAnswer: "A",
    explanation: "The decomposition tree visual in Power BI lets you visualize data across multiple dimensions. It automatically aggregates data and enables\ndrilling down into your dimensions in any order. It is also an artificial intelligence (AI) visualization, so you can ask it to find the next dimension\nto drill down into based on certain criteria.\nThis makes it a valuable tool for ad hoc exploration and conducting root cause analysis.\nReference:",
    communityVote: "D (54%)",
    isPremium: false
  },
  {
    id: 77,
    topic: "Topic 3",
    type: "mcq",
    question: "You have a table that contains sales data and approximately 1,000 rows.\nYou need to identify outliers in the table.\nWhich type of visualization should you use?",
    options: [
      "A. area chart",
      "B. scatter plot",
      "C. pie chart",
      "D. donut chart"
    ],
    correctAnswer: "B",
    explanation: "Outlier Detection in Power BI using Funnel Plot, which is a scatter plot.\nOutliers are those data points that lie outside the overall pattern of distribution & the easiest way to detect outliers is though graphs. Box plots,\nScatter plots can help detect them easily.\nReference:",
    communityVote: "B (100%)",
    isPremium: false
  },
  {
    id: 78,
    topic: "Topic 3",
    type: "mcq",
    question: "You have a report that contains three pages. One of the pages contains a KPI visualization.\nYou need to filter all the visualizations in the report except for the KPI visualization.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    options: [
      "A. Edit the interactions of the KPI visualization.",
      "B. Add the same slicer to each page and configure Sync slicers.",
      "C. Edit the interactions of the slicer that is on the same page as the KPI visualization.",
      "D. Configure a page-level filter.",
      "E. Configure a report-level filter."
    ],
    correctAnswer: "BC",
    explanation: "Slicers are another way of filtering. They narrow the portion of the dataset that is shown in the other report visualizations.\nControl which page visuals are affected by slicers\nExample: Use visual interactions to keep slicer selections from filtering this chart.\n1. Go to the Overview page of the report, and then select the DM slicer you previously created.\n2. On the Power BI Desktop menu, select the Format menu under Visual Tools, and then select Edit interactions.\n3. Filter controls, each with a Filter and a None option, appear above all the visuals on the page. Initially, the Filter option is preselected on all\nthe controls.\n4. Select the None option in the filter control above the Total Sales Variance by FiscalMonth and District Manager chart to stop the DM slicer\nfrom filtering it.\nIncorrect:\nNot D: A page-level filter is used to filter an entire page.\nNot E: A report-level filter is used to filter an entire report.\nReference:",
    communityVote: "BC (100%)",
    isPremium: false
  },
  {
    id: 79,
    topic: "Topic 3",
    type: "mcq",
    question: "You are creating a Power BI report to analyze consumer purchasing patterns from a table named Transactions. The Transactions table contains a\nnumeric field named Spend.\nYou need to include a visual that identifies which fields have the greatest impact on Spend.\nWhich type of visual should you use?",
    options: [
      "A. Q&A",
      "B. smart narrative",
      "C. decomposition tree",
      "D. key influencers"
    ],
    correctAnswer: "D",
    explanation: "The key influencers visual helps you understand the factors that drive a metric you're interested in. It analyzes your data, ranks the factors that\nmatter, and displays them as key influencers. For example, suppose you want to figure out what influences employee turnover, which is also\nknown as churn. One factor might be employment contract length, and another factor might be commute time.\nWhen to use key influencers -\nThe key influencers visual is a great choice if you want to:\nSee which factors affect the metric being analyzed.\nContrast the relative importance of these factors. For example, do short-term contracts affect churn more than long-term contracts?\nReference:",
    communityVote: "D (100%)",
    isPremium: false
  },
  {
    id: 80,
    topic: "Topic 3",
    type: "mcq",
    question: "You have a dashboard that contains tiles pinned from a single report as shown in the Original Dashboard exhibit. (Click the Original Dashboard\ntab.)\nYou need to modify the dashboard to appear as shown in the Modified Dashboard exhibit. (Click the Modified Dashboard tab.)\nWhat should you do?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. Change the report theme.",
      "B. Change the dashboard theme.",
      "C. Edit the details of each tile.",
      "D. Create a custom CSS file."
    ],
    correctAnswer: "B",
    explanation: "With dashboard themes you can apply a color theme to your entire dashboard, such as corporate colors, seasonal coloring, or any other color\ntheme you might want to apply. When you apply a dashboard theme, all visuals on your dashboard use the colors from your selected theme.\nIncorrect:\nNot A: With Power BI Desktop report themes, you can apply design changes to your entire report, such as using corporate colors, changing icon\nsets, or applying new default visual formatting.\nReference:",
    communityVote: "B (100%)",
    isPremium: false
  },
  {
    id: 81,
    topic: "Topic 3",
    type: "mcq",
    question: "You have a Power BI report. The report contains a visual that shows gross sales by date. The visual has anomaly detection enabled.\nNo anomalies are detected.\nYou need to increase the likelihood that anomaly detection will identify anomalies in the report.\nWhat should you do?",
    options: [
      "A. Increase the Expected range transparency setting.",
      "B. Add a data field to the Legend field well.",
      "C. Increase the Sensitivity setting.",
      "D. Add a data field to the Secondary values field well."
    ],
    correctAnswer: "A",
    explanation: "Adding anomaly detection automatically enriches the chart with anomalies, and the expected range of values. When a value goes outside this\nexpected boundary, it's marked as an anomaly.\nReference:",
    communityVote: "C (100%)",
    isPremium: true
  },
  {
    id: 82,
    topic: "Topic 3",
    type: "mcq",
    question: "You have a Power BI report.\nYou have a table named Data1 that contains 10 million rows.\nData1 is used in the following visuals:\n✑ A card that shows the number of records\n✑ A bar chart that shows total transaction amount by territory\n✑ A scatter plot that shows transaction amount and profit amount on the axes and points colored by territory\nYou need to modify the scatter plot to make it easier for users to identify meaningful patterns. The solution must not affect the accuracy of the\nother visuals.\nWhat should you do?",
    options: [
      "A. Add a count field of the transaction amount to the size bucket of the scatter plot.",
      "B. Add a trend line to the scatter plot.",
      "C. Enable high-density sampling on the scatter plot.",
      "D. Apply a row filter to the Data1 query in Power Query Editor."
    ],
    correctAnswer: "B",
    explanation: "A trend line is a straight line that best represents the points on a scatterplot. The trend line may go through some points but need not go\nthrough them all. The trend line is used to show the pattern of the data. This trend line may show a positive trend or a negative trend.\nReference:\ndata-msm8/",
    communityVote: "C (64%)",
    isPremium: true
  },
  {
    id: 83,
    topic: "Topic 3",
    type: "mcq",
    question: "You have a Power BI workspace named Inventory that contains a dataset, a report, and a dashboard.\nYou need to add an additional tile to the dashboard. The tile must show inventory by location. This information is NOT visualized in the report. The\nsolution must minimize the impact on the report.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    options: [
      "A. Ask a question by using Q&A.",
      "B. Hide the report page.",
      "C. Pin the visual to the dashboard.",
      "D. Use quick insights on the dashboard.",
      "E. Add the visual to the report."
    ],
    correctAnswer: "AC",
    explanation: "In the Power BI service (app.powerbi.com), a dashboard contains tiles pinned from one or more datasets, so you can ask questions about any\nof the data contained in any of those datasets. T\nThe answer to your question is displayed as an interactive visualization and updates as you modify the question.\nOpen a dashboard and place your cursor in the question box. Even before you start typing, Q&A displays a new screen with suggestions to help\nyou form your question. You see phrases and complete questions containing the names of the tables in the underlying datasets and may even\nsee complete questions listed if the dataset owner has created featured questions,\nReference:",
    communityVote: "AC (100%)",
    isPremium: true
  },
  {
    id: 84,
    topic: "Topic 3",
    type: "hotspot",
    question: "You have a dataset named Pens that contains the following columns:\n✑ Item\n✑ Unit Price\n✑ Quantity Ordered\nYou need to create a visualization that shows the relationship between Unit Price and Quantity Ordered. The solution must highlight orders that\nhave a similar unit price and ordered quantity.\nWhich type of visualization and which feature should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    options: [],
    correctAnswer: "Box 1: A scatter plot of Quantity Ordered and Unit Price by item\nA scatter chart shows the relationship between two numerical values.\nNote: Scatter charts are a great choice:\nTo show relationships between two numerical values.\nTo plot two groups of numbers as one series of x and y coordinates.\nTo use instead of a line chart when you want to change the scale of the horizontal axis.\nTo turn the horizontal axis into a logarithmic scale.\nTo display worksheet data that includes pairs or grouped sets of values.\nTo show patterns in large sets of data, for example by showing linear or non-linear trends, clusters, and outliers.\nTo compare large numbers of data points without regard to time. The more data that you include in a Scatter chart, the better the comparisons\nthat you can make.\nBox 2: Automatically find clusters\nScatter charts are a great choice:\n* To show patterns in large sets of data, for example by showing linear or non-linear trends, clusters, and outliers.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: true
  },
  {
    id: 85,
    topic: "Topic 3",
    type: "mcq",
    question: "You have a Power BI report that contains three pages named Page1, Page2, and Page3. All the pages have the same slicers.\nYou need to ensure that all the filters applied to Page1 apply to Page1 and Page3 only.\nWhat should you do?",
    options: [
      "A. On each page, modify the interactions of the slicer.",
      "B. Enable visibility of the slicers on Page1 and Page3. Disable visibility of the slicer on Page2.",
      "C. Sync the slicers on Page1 and Page3."
    ],
    correctAnswer: "A",
    explanation: "Control which page visuals are affected by slicers\nBy default, slicers on report pages affect all the other visualizations on that page, including each other. As you choose values in the list and\ndate slicers that you just created, notice the effects on the other visualizations. The filtered data is an intersection of the values selected in\nboth slicers.\nUse visual interactions to exclude some page visualizations from being affected by others. On the Overview page, the Total Sales Variance by\nFiscalMonth and\nDistrict Manager chart shows overall comparative data for district managers by month, which is information that you want to keep visible. Use\nvisual interactions to keep slicer selections from filtering this chart.\n1. Go to the Overview page of the report, and then select the DM slicer you previously created.\n2. On the Power BI Desktop menu, select the Format menu under Visual Tools, and then select Edit interactions.\n3. Filter controls, each with a Filter and a None option, appear above all the visuals on the page. Initially, the Filter option is preselected on all\nthe controls.\n4. Select the None option in the filter control above the Total Sales Variance by FiscalMonth and District Manager chart to stop the DM slicer\nfrom filtering it.\nReference:",
    communityVote: "C (100%)",
    isPremium: true
  },
  {
    id: 86,
    topic: "Topic 4",
    type: "hotspot",
    question: "You have a Power BI tenant that hosts the datasets shown in the following table.\nYou have the following requirements:\nThe export of reports that contain Personally Identifiable Information (PII) must be prevented.\nData used for financial decisions must be reviewed and approved before use.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    options: [],
    correctAnswer: "",
    explanation: "Reference:",
    communityVote: null,
    isPremium: true
  },
  {
    id: 87,
    topic: "Topic 4",
    type: "mcq",
    question: "You have a Power BI tenant.\nYou have reports that use financial datasets and are exported as PDF files.\nYou need to ensure that the reports are encrypted.\nWhat should you implement?",
    options: [
      "A. Microsoft Intune policies",
      "B. row-level security (RLS)",
      "C. sensitivity labels",
      "D. dataset certifications"
    ],
    correctAnswer: "C",
    explanation: "When you create a sensitivity label, you can restrict access to content that the label will be applied to.\nWhen a document or email is encrypted, access to the content is restricted, so that it:\nCan be decrypted only by users authorized by the label's encryption settings.\nRemains encrypted no matter where it resides, inside or outside your organization, even if the file's renamed.\nIncorrect:\nNot B: Row-level security (RLS) with Power BI can be used to restrict data access for given users. Filters restrict data access at the row level,\nand you can define filters within roles.\nCurrent limitations for row-level security:\nReference:",
    communityVote: "C (100%)",
    isPremium: true
  },
  {
    id: 88,
    topic: "Topic 4",
    type: "mcq",
    question: "You have a Microsoft Excel file on a file server.\nYou create a Power BI report and import a table from the Excel file.\nYou publish the report.\nYou need to ensure that the data refreshes every four hours.\nWhat should you do first?",
    options: [
      "A. Upload the Excel file to a Power BI workspace.",
      "B. Create a subscription to the report.",
      "C. Deploy an on-premises data gateway.",
      "D. Edit the data source credentials."
    ],
    correctAnswer: "C",
    explanation: "You can scheduled refresh for the On-premises data gateway (personal mode) and the On-premises data gateway. You specify refresh options\nin the following areas of the Power BI service: Gateway connection, Data source credentials, and Scheduled refresh.\nReference:",
    communityVote: "C (100%)",
    isPremium: true
  },
  {
    id: 89,
    topic: "Topic 4",
    type: "mcq",
    question: "You have a dataset that is used infrequently and refreshes every hour.\nYou receive a notification that the refresh was disabled due to inactivity.\nWhich two actions will cause the scheduled refresh schedule to resume? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    options: [
      "A. Enable query caching for the dataset.",
      "B. Import the dataset to Microsoft Excel.",
      "C. From the Power BI service, open a dashboard that uses the dataset.",
      "D. From the Power BI service, open a report that uses the dataset.",
      "E. From PowerShell, run the get-powerbireport cmdlet."
    ],
    correctAnswer: "CD",
    explanation: "After two months of inactivity, scheduled refresh on your dataset is paused. A dataset is considered inactive when no user has visited any\ndashboard or report built on the dataset. At that time, the dataset owner is sent an email indicating the scheduled refresh is paused. The\nrefresh schedule for the dataset is then displayed as disabled. To resume scheduled refresh, simply revisit any dashboard or report built on the\ndataset.\nIncorrect:\nNot E: get-powerbireport retrieves a list of Power BI reports that match the specified search criteria and scope.\nReference:",
    communityVote: "CD (100%)",
    isPremium: true
  },
  {
    id: 90,
    topic: "Topic 4",
    type: "mcq",
    question: "You have a Power BI workspace that contains a dataset, a report, and a dashboard. The following groups have access:\n✑ External users can access the dashboard.\n✑ Managers can access the dashboard and a manager-specific report.\n✑ Employees can access the dashboard and a row-level security (RLS) constrained report.\nYou need all users, including the external users, to be able to tag workspace administrators if they identify an issue with the dashboard. The\nsolution must ensure that other users see the issues that were raised.\nWhat should you use?",
    options: [
      "A. comments",
      "B. chat in Microsoft Teams",
      "C. alerts",
      "D. subscriptions"
    ],
    correctAnswer: "A",
    explanation: "Add a personal comment or start a conversation about a dashboard or report with your colleagues. The comment feature is just one of the\nways a business user can collaborate with others.\nNote: Comments can be added to an entire dashboard, to individual visuals on a dashboard, to a report page, to a paginated report, and to\nindividual visuals on a report page. Add a general comment or add a comment targeted at specific colleagues.\nReference:",
    communityVote: "A (100%)",
    isPremium: true
  },
  {
    id: 91,
    topic: "Topic 4",
    type: "mcq",
    question: "You have a PBIX file that imports several tables from an Azure SQL database.\nThe data will be migrated to another Azure SQL database.\nYou need to change the connections in the PBIX file. The solution must minimize administrative effort.\nWhat should you do?",
    options: [
      "A. From Power Query Editor, create new queries.",
      "B. From Power Query Editor, modify the source of each query.",
      "C. Create a PBIT file, open the file, and change the data sources when prompted.",
      "D. Modify the Data source settings."
    ],
    correctAnswer: "D",
    explanation: "Open the PBIX file with Microsoft Power BI Desktop.\nThen choose File -> Options and settings -> Data source settings >Right click data sources and change source.\nNote:\nIncorrect:\nNot C: PBIT is a template file.\nThe PBIT file keeps your report structure and contains 'DataModelSchema File' instead of ''DataModel File''. However, If you choose import\nmode, the PBIX file stores all imported data from data sources and the report structure.\nReference:",
    communityVote: "D (94%)",
    isPremium: true
  },
  {
    id: 92,
    topic: "Topic 4",
    type: "mcq",
    question: "You have a Power BI workspace that contains several reports.\nYou need to provide a user with the ability to create a dashboard that will use the visuals from the reports.\nWhat should you do?",
    options: [
      "A. Create a row-level security (RLS) role and add the user to the role.",
      "B. Share the reports with the user.",
      "C. Grant the Read permission for the datasets to the user.",
      "D. Add the user as a member of the workspace.",
      "E. Add the user as a Viewer of the workspace."
    ],
    correctAnswer: "D",
    explanation: "To grant access to a new workspace, assign those user groups or individuals to one of the workspace roles: Admin, Member, Contributor, or\nViewer.\nWorkspace roles -\nReference:",
    communityVote: "D (100%)",
    isPremium: true
  },
  {
    id: 93,
    topic: "Topic 4",
    type: "dragdrop",
    question: "You have a Power BI workspace that contains a single-page report named Sales.\nYou need to add all the visuals from Sales to a dashboard. The solution must ensure that additional visuals added to the page are added\nautomatically to the dashboard.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    options: [],
    correctAnswer: "An entire report page can be pinned to a dashboard, which is called pinning a live tile. It's called a live tile because you can interact with the tile\non the dashboard.\nUnlike with individual visualization tiles, changes made in the report are automatically synced with the dashboard.\nStep 2: Open the Sales report -\nStep 3: Pin the page.\n1. Open a report in Editing view.\n2. With no visualizations selected, from the menu bar, select Pin to a dashboard.\n3. Pin the tile to an existing dashboard or to a new dashboard. Notice the highlighted text: Pin live page enables changes to reports to appear in\nthe dashboard tile when the page is refreshed.\n4. Select Pin live. A Success message (near the top right corner) lets you know the page was added, as a tile, to your dashboard.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: true
  },
  {
    id: 94,
    topic: "Topic 4",
    type: "mcq",
    question: "You have a report in Power BI named report1 that is based on a shared dataset.\nYou need to minimize the risk of data exfiltration for report. The solution must prevent other reports from being affected.\nWhat should you do?\nreport.",
    options: [
      "A. Clear Allow recipients to share your dashboard and Allow users to build new content using the underlying datasets for the dataset.",
      "B. Apply row-level security (RLS) to the shared dataset.",
      "C. Select the Allow end users to export both summarized and underlying data from the service or Report Server Export data option for the",
      "D. Select the Don't allow end users to export any data from the service or Report Server Export data option for the report."
    ],
    correctAnswer: "D",
    explanation: "Besides the various permissions you can set, there are also two different options to disable the export functionality. First of all is the Export\ndata in general and second the Export to Excel as a specific setting. Both have the same setup for permissions\nExport Data -\nReference:",
    communityVote: "D (94%)",
    isPremium: true
  },
  {
    id: 95,
    topic: "Topic 4",
    type: "mcq",
    question: "In Power BI Desktop, you are creating visualizations in a report based on an imported dataset.\nYou need to allow Power BI users to export the summarized data used to create the visualizations but prevent the users from exporting the\nunderlying data.\nWhat should you do?",
    options: [
      "A. From the Power BI service, configure the dataset permissions.",
      "B. From Power BI Desktop, configure the Data Load settings for the current file.",
      "C. From Power BI Desktop, modify the data source permissions.",
      "D. From Power BI Desktop, configure the Report settings for the current file."
    ],
    correctAnswer: "A",
    explanation: "Dataset permissions in the Power BI service\nThe table below describes the four levels of permission that control access to datasets in the Power BI service.\n* Reshare\nAllows user to share the content of the dataset with other users who will get read, reshare, or build permissions for it.\n* Read\n* Build\n* Write\nReference:",
    communityVote: "D (91%)",
    isPremium: true
  },
  {
    id: 96,
    topic: "Topic 4",
    type: "mcq",
    question: "You have a Power BI report that uses row-level security (RLS).\nYou need to transfer RLS membership maintenance to an Azure network security team. The solution must NOT provide the Azure network security\nteam with the ability to manage reports, datasets, or dashboards.\nWhat should you do?",
    options: [
      "A. Grant the Read and Build permissions for the Power BI datasets to the Azure network security team.",
      "B. Configure custom instructions for the Request access feature that instructs users to contact the Azure network security team.",
      "C. Instruct the Azure network security team to create security groups. Configure RLS to use the groups.",
      "D. Add the Azure network security team as members of the RLS role."
    ],
    correctAnswer: "C",
    explanation: "Configure row-level security group membership, Working with members\nAdd members -\nIn the Power BI service, you can add a member to the role by typing in the email address or name of the user or security group.\nYou can use the following groups to set up row level security.\nDistribution Group -\nMail-enabled Group -\nSecurity Group -\nIncorrect:\nNot A: Build permission applies to datasets. When you give users Build permission, they can build new content on your dataset, such as reports,\ndashboards, pinned tiles from Q&A, paginated reports, and Insights Discovery.\nReference:",
    communityVote: "C (100%)",
    isPremium: true
  },
  {
    id: 97,
    topic: "Topic 4",
    type: "mcq",
    question: "You have four sales regions. Each region has multiple sales managers.\nYou implement row-level security (RLS) in a data model. You assign the relevant mail-enabled security group to each role.\nYou have sales reports that enable analysis by region. The sales managers can view the sales records of their region. The sales managers are\nprevented from viewing records from other regions.\nA sales manager changes to a different region.\nYou need to ensure that the sales manager can see the correct sales data.\nWhat should you do?",
    options: [
      "A. Change the Microsoft Power BI license type of the sales manager.",
      "B. From Microsoft Power BI Desktop, edit the Row-Level Security setting for the reports.",
      "C. Manage the permissions of the underlying dataset.",
      "D. Request that the sales manager be added to the correct Azure Active Directory group."
    ],
    correctAnswer: "D",
    explanation: "You can use the following groups to set up row level security.\n* Distribution Group\n* Mail-enabled Group - This group also contains a list of email addresses of members and can also be used to control access to OneDrive and\nSharePoint.\nThe Mail-Enabled Security Group can be created in the Office 365 Admin Portal.\n* Security Group - This is also known as an Active Directory Security Group. This group lives within Active Directory and Azure Active Directory.\nReference:\nbe-used-to-set-permissions-in-power-bi/",
    communityVote: "D (100%)",
    isPremium: true
  },
  {
    id: 98,
    topic: "Topic 4",
    type: "mcq",
    question: "You have more than 100 published datasets.\nTen of the datasets were verified to meet your corporate quality standards.\nYou need to ensure that the 10 verified datasets appear at the top of the list of published datasets whenever users search for existing datasets.\nWhat should you do?",
    options: [
      "A. Promote the datasets.",
      "B. Certify the datasets.",
      "C. Feature the dataset on the home page.",
      "D. Publish the datasets in an app."
    ],
    correctAnswer: "B",
    explanation: "Once logged in, you will be presented with a list of datasets that you can access from your various workspaces. This is one reason why having\nofficial datasets promoted and certified is recommended, as these will appear at the top of the list, with certified datasets appearing before\npromoted datasets.\nNote: Power BI provides two ways you can endorse your valuable, high-quality content to increase its visibility: promotion and certification.\nPromotion: Promotion is a way to highlight content you think is valuable and worthwhile for others to use. It encourages the collaborative use\nand spread of content within an organization.\nAny content owner, as well as any member with write permissions on the workspace where the content is located, can promote the content\nwhen they think it's good enough for sharing.\nCertification: Certification means that the content meets the organization's quality standards and can be regarded as reliable, authoritative, and\nready for use across the organization.\nCurrently it is possible to endorse\nDatasets -\nDataflows -\nReports -\nApps -\nIf dataset discoverability has been enabled in your organization, endorsed datasets can be made discoverable. When a dataset is discoverable,\nusers who don't have access to it will be able to find it and request access.\nReference:\nendorse-content",
    communityVote: "B (100%)",
    isPremium: true
  },
  {
    id: 99,
    topic: "Topic 4",
    type: "dragdrop",
    question: "You have a Microsoft Power BI workspace.\nYou need to grant the user capabilities shown in the following table.\nThe solution must use the principle of least privilege.\nWhich user role should you assign to each user? To answer, drag the appropriate roles to the correct users. Each role may be used once, more than\nonce, or not at all. You may need to drag the split bar.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    options: [],
    correctAnswer: "Box 1: Member -\nOnly Admin and Member can publish, unpublish, and change permissions for an app.\nIncorrect:\nContributors can update the app associated with the workspace, if the workspace Admin delegates this permission to them. However, they can't\npublish a new app or change who has permission to it.\nBox 2: Contributor -\nAdmin,Member and Contributor can create, edit, and delete content, such as reports, in the workspace.\nNote: Contributor - This role can access and interact with reports and dashboards. Additionally, this role can create, edit, copy, and delete items\nin a workspace, publish reports, schedule refreshes, and modify gateways.\nIncorrect:\nViewer - This role provides read only access to workspace items. Read access does provide report / dashboard consumers the ability to not\nonly view, but also interact with visuals. Interaction does not mean changing a visual.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: true
  },
  {
    id: 100,
    topic: "Topic 4",
    type: "mcq",
    question: "You create a dashboard by using the Microsoft Power BI Service. The dashboard contains a card visual that shows total sales from the current\nyear.\nYou grant users access to the dashboard by using the Viewer role on the workspace.\nA user wants to receive daily notifications of the number shown on the card visual.\nYou need to automate the notifications.\nWhat should you do?",
    options: [
      "A. Create a subscription.",
      "B. Create a data alert.",
      "C. Share the dashboard to the user.",
      "D. Tag the user in a comment."
    ],
    correctAnswer: "B",
    explanation: "Set alerts to notify you when data in your dashboards changes beyond limits you set.\nAlerts can only be set on tiles pinned from report visuals, and only on gauges, KPIs, and cards.\nReference:",
    communityVote: "A (100%)",
    isPremium: true
  },
  {
    id: 101,
    topic: "Topic 4",
    type: "mcq",
    question: "You have a Power BI workspace named Workspace1 that contains a dataset named DS1 and a report named RPT1.\nA user wants to create a report by using the data in DS1 and publish the report to another workspace.\nYou need to provide the user with the appropriate access. The solution must minimize the number of access permissions granted to the user.\nWhat should you do?",
    options: [
      "A. Add the user as a Viewer of Workspace1.",
      "B. Grant the Build permission for DS1 to the user.",
      "C. Share RPT1 with the user.",
      "D. Add the user as a member of Workspace1."
    ],
    correctAnswer: "B",
    explanation: "More granular permissions -\nPower BI provides the Build permission as a complement to the existing permissions, Read and Reshare. All users who already had Read\npermission for datasets via app permissions, sharing, or workspace access at that time also got Build permission for those same datasets.\nThey got Build permission automatically because Read permission already granted them the right to build new content on top of the dataset, by\nusing Analyze in Excel or Export.\nWith this more granular Build permission, you can choose who can only view the content in the existing report or dashboard and who can create\ncontent connected to the underlying datasets.\nIf your dataset is being used by a report outside the dataset workspace, you can't delete that dataset. Instead, you see an error message.\nReference:",
    communityVote: "B (75%)",
    isPremium: true
  },
  {
    id: 102,
    topic: "Topic 4",
    type: "mcq",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have fiv   e reports and two dashboards in a workspace.\nYou need to grant all organizational users read access to one dashboard and three reports.\nSolution: You publish an app to the entire organization.\nDoes this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswer: "B",
    explanation: "Instead: You create an Azure Active Directory group that contains all the users. You share each selected report and the one dashboard to the\ngroup.\nReference:",
    communityVote: "A (100%)",
    isPremium: true
  },
  {
    id: 103,
    topic: "Topic 4",
    type: "mcq",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have fiv   e reports and two dashboards in a workspace.\nYou need to grant all organizational users read access to one dashboard and three reports.\nSolution: You enable included in app for all assets.\nDoes this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswer: "B",
    explanation: "You need to specify the dashboard and the three reports to be included in the app.\nInstead: You create an Azure Active Directory group that contains all the users. You share each selected report and the one dashboard to the\ngroup.\nNote: A published App can provide the required access.\nWhen the dashboards and reports in your workspace are ready, you choose which dashboards and reports you want to publish, then publish\nthem as an app.\nIn Power BI, you can create official packaged content, then distribute it to a broad audience as an app. You create apps in workspaces, where\nyou can collaborate on Power BI content with your colleagues. Then you can publish the finished app to large groups of people in your\norganization.\nReference:",
    communityVote: "B (100%)",
    isPremium: true
  },
  {
    id: 104,
    topic: "Topic 4",
    type: "mcq",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have fiv   e reports and two dashboards in a workspace.\nYou need to grant all organizational users read access to one dashboard and three reports.\nSolution: You assign all the users the Viewer role to the workspace.\nDoes this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswer: "A",
    explanation: "Instead: You create an Azure Active Directory group that contains all the users. You share each selected report and the one dashboard to the\ngroup.\nReference:",
    communityVote: "B (88%)",
    isPremium: true
  },
  {
    id: 105,
    topic: "Topic 4",
    type: "mcq",
    question: "From Power BI Desktop, you publish a new dataset and report to a Power BI workspace. The dataset has a row-level security (RLS) role named HR.\nYou need to ensure that the HR team members have RLS applied when they view reports based on the dataset.\nWhat should you do?",
    options: [
      "A. From powerbi.com, add users to the HR role for the dataset.",
      "B. From powerbi.com, share the dataset to the HR team members.",
      "C. From Power BI Desktop, change the Row-Level Security settings.",
      "D. From Power BI Desktop, import a table that contains the HR team members."
    ],
    correctAnswer: "A",
    explanation: "Working with members -\nAdd members -\nIn the Power BI service, you can add a member to the role by typing in the email address or name of the user or security group.\nReference:",
    communityVote: "A (93%)",
    isPremium: true
  },
  {
    id: 106,
    topic: "Topic 4",
    type: "mcq",
    question: "You have a Power BI dashboard that monitors the quality of manufacturing processes. The dashboard contains the following elements:\n✑ A line chart that shows the number of defective products manufactured by day\n✑ A KPI visual that shows the current daily percentage of defective products manufactured\nYou need to be notified when the daily percentage of defective products manufactured exceeds 3%.\nWhat should you create?",
    options: [
      "A. a subscription",
      "B. an alert",
      "C. a smart narrative visual",
      "D. a Q&A visual"
    ],
    correctAnswer: "B",
    explanation: "Set alerts in the Power BI service to notify you when data on a dashboard changes above or below limits you set. Alerts can be set on tiles\npinned from report visuals or from Power BI Q&A, and only on gauges, KPIs, and cards.\nReference:",
    communityVote: "B (100%)",
    isPremium: true
  },
  {
    id: 107,
    topic: "Topic 4",
    type: "mcq",
    question: "You create a report by using Microsoft Power BI Desktop.\nThe report uses data from a Microsoft SQL Server Analysis Services (SSAS) cube located on your company's internal network.\nYou plan to publish the report to the Power BI Service.\nWhat should you implement to ensure that users who consume the report from the Power BI Service have the most up-to-date data from the cube?",
    options: [
      "A. an OData feed",
      "B. an On-premises data gateway",
      "C. a subscription",
      "D. a scheduled refresh of the dataset"
    ],
    correctAnswer: "B",
    explanation: "After you install the on-premises data gateway, you need to add data sources that can be used with the gateway. You can work with gateways\nand SQL Server\nAnalysis Services (SSAS) data sources that are used either for scheduled refresh or for live connections.\nNote: Power BI service is a cloud-based business analytics and data visualization service that enables anyone to visualize and analyze data\nwith greater speed, efficiency, and understanding.\nReference:",
    communityVote: "B (100%)",
    isPremium: true
  },
  {
    id: 108,
    topic: "Topic 4",
    type: "mcq",
    question: "You have fiv   e sales regions. Each region is assigned a single salesperson.\nYou have an imported dataset that has a dynamic row-level security (RLS) role named Sales. The Sales role filters sales transaction data by\nsalesperson.\nSalespeople must see only the data from their region.\nYou publish the dataset to powerbi.com, set RLS role membership, and distribute the dataset and related reports to the salespeople.\nA salesperson reports that she believes she should see more data.\nYou need to verify what data the salesperson currently sees.\nWhat should you do?",
    options: [
      "A. Use the Test as role option to view data as the salesperson's user account.",
      "B. Use the Test as role option to view data as the Sales role.",
      "C. Instruct the salesperson to open the report in Microsoft Power BI Desktop.",
      "D. Filter the data in the reports to match the intended logic in the filter on the sales transaction table."
    ],
    correctAnswer: "B",
    explanation: "Validating the role within the Power BI service\nYou can validate that the role you defined is working correctly in the Power BI service by testing the role.\n1. Select More options (...) next to the role.\n2. Select Test data as role.\nYou'll see reports that are available for this role. Dashboards aren't shown in this view. In the page header, the role being applied is shown.\nReference:",
    communityVote: "A (100%)",
    isPremium: true
  },
  {
    id: 109,
    topic: "Topic 4",
    type: "mcq",
    question: "You have multiple dashboards.\nYou need to ensure that when users browse the available dashboards from powerbi.com, they can see which dashboards contain Personally\nIdentifiable\nInformation (PII). The solution must minimize configuration effort and impact on the dashboard design.\nWhat should you use?",
    options: [
      "A. Microsoft Information Protection sensitivity labels",
      "B. tiles",
      "C. comments",
      "D. Active Directory groups"
    ],
    correctAnswer: "A",
    explanation: "In the Power BI service, sensitivity labels can be applied to datasets, reports, dashboards, and dataflows.\nSensitivity labels on reports, dashboards, datasets, and dataflows are visible from many places in the Power BI service. Sensitivity labels on\nreports and dashboards are also visible in the Power BI iOS and Android mobile apps and in embedded visuals. In Desktop, you can see the\nsensitivity label in the status bar.\nReference:",
    communityVote: "A (100%)",
    isPremium: true
  },
  {
    id: 110,
    topic: "Topic 4",
    type: "mcq",
    question: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have fiv   e reports and two dashboards in a workspace.\nYou need to grant all organizational users read access to one dashboard and three reports.\nSolution: You create an Azure Active Directory group that contains all the users. You share each selected report and the one dashboard to the\ngroup.\nDoes this meet the goal?",
    options: [
      "A. Yes",
      "B. No"
    ],
    correctAnswer: "B",
    explanation: "Share with more than 100 separate users\nAt most, you can share with 100 users or groups in a single share action. However, you can give more than 500 users access to an item. Here\nare some suggestions:\nShare multiple times by specifying the users individually.\nShare with a user group that contains all the users.\nCreate the report or dashboard in a workspace, then create an app from the workspace. You can share the app with many more people.\nReference:",
    communityVote: "A (94%)",
    isPremium: true
  },
  {
    id: 111,
    topic: "Topic 4",
    type: "dragdrop",
    question: "You have a Power BI table named Customer that contains a field named Email Address.\nYou discover that multiple records contain the same email address.\nYou need to create a calculated column to identify which records have duplicate email addresses.\nHow should you complete the DAX expression for the calculated column? To answer, drag the appropriate values to the correct targets. Each value\nmay be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    options: [],
    correctAnswer: "",
    explanation: "",
    communityVote: null,
    isPremium: true
  },
  {
    id: 112,
    topic: "Topic 5",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an online retailer that uses Power BI.\nLitware plans to leverage data from an Azure SQL database that stores data for the company's live e-commerce website.\nLitware uses Azure Active Directory (Azure AD) to authenticate users.\nExisting Environment. Sales Data\nLitware has online sales data that has the SQL schema shown in the following table.\nIn the Date table, the date_id column has a format of yyyymmdd and the month column has a format of yyyymm.\nThe week column in the Date table and the week_id column in the Weekly_Returns table have a format of yyyyww.\nIn the Sales table, the sales_id column represents a unique transaction.\nThe region id column can be managed by only one sales manager.\nExisting Environment. Data Concerns\nYou are concerned with the quality and completeness of the sales data. You must ensure that negative and missing sales_amount values do NOT\ncontribute to the total sales amount calculation.\nExisting Environment. Reporting Requirements\nLitware identifies the following reporting requirements:\nExecutives require a visual that shows sales by region.\nExecutives require a visual that shows returns by region manager and the sales managers that report to them.\nThe sales managers must be able to see only the sales data of their respective region.\nThe sales managers require a visual to analyze sales performance versus sales targets.\nThe sales department requires reports that contain the number of sales transactions.\nUsers must be able to see the month in each report as shown in the following example: Feb 2020.\nThe customer service department requires a visual that can be filtered by both sales month and ship month independently.\nThe maximum allowed latency to include transactions in reports is five minutes.\nYou need to create the required relationship for the executive's visual.\nWhat should you do before you can create the relationship?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. Change the data type of Sales[region_id] to Whole Number.",
      "B. Change the data type of Sales[region_id] to Decimal Number.",
      "C. In the Sales table, add a measure for Sum(sales_amount).",
      "D. Change the data type of Sales[sales_id] to Text."
    ],
    correctAnswer: "A",
    explanation: "Executives require a visual that shows sales by region.\nThe data type of Sales[region_id] must be changed from varchar to Whole Number, as Sales[region_id] is Integer.",
    communityVote: "A (89%)",
    isPremium: true
  },
  {
    id: 113,
    topic: "Topic 5",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an online retailer that uses Power BI.\nLitware plans to leverage data from an Azure SQL database that stores data for the company's live e-commerce website.\nLitware uses Azure Active Directory (Azure AD) to authenticate users.\nExisting Environment. Sales Data\nLitware has online sales data that has the SQL schema shown in the following table.\nIn the Date table, the date_id column has a format of yyyymmdd and the month column has a format of yyyymm.\nThe week column in the Date table and the week_id column in the Weekly_Returns table have a format of yyyyww.\nIn the Sales table, the sales_id column represents a unique transaction.\nThe region id column can be managed by only one sales manager.\nExisting Environment. Data Concerns\nYou are concerned with the quality and completeness of the sales data. You must ensure that negative and missing sales_amount values do NOT\ncontribute to the total sales amount calculation.\nExisting Environment. Reporting Requirements\nLitware identifies the following reporting requirements:\nExecutives require a visual that shows sales by region.\nExecutives require a visual that shows returns by region manager and the sales managers that report to them.\nThe sales managers must be able to see only the sales data of their respective region.\nThe sales managers require a visual to analyze sales performance versus sales targets.\nThe sales department requires reports that contain the number of sales transactions.\nUsers must be able to see the month in each report as shown in the following example: Feb 2020.\nThe customer service department requires a visual that can be filtered by both sales month and ship month independently.\nThe maximum allowed latency to include transactions in reports is five minutes.\nYou need to get data from the Microsoft SQL Server tables.\nWhat should you use to configure the connection?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. Import that uses a Microsoft account",
      "B. Import that uses a database credential",
      "C. DirectQuery that uses a database credential",
      "D. DirectQuery that uses the end-user's credentials"
    ],
    correctAnswer: "D",
    explanation: "Litware plans to leverage data from an Azure SQL database that stores data for the company's live e-commerce website.\nWith DirectQuery, queries are sent back to your Azure SQL Database as you explore the data in the report view.\nAfter you publish an Azure SQL DirectQuery dataset to the service, you can enable single sign-on (SSO) using Azure Active Directory (Azure AD)\nOAuth2 for your end users.\nWhen the SSO option is enabled and your users access reports built atop the data source, Power BI sends their authenticated Azure AD\ncredentials in the queries to the Azure SQL database or data warehouse. This option enables Power BI to respect the security settings that are\nconfigured at the data source level.\nReference:",
    communityVote: "C (57%)",
    isPremium: true
  },
  {
    id: 114,
    topic: "Topic 6",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nGeneral Overview -\nNorthwind Traders is a specialty food import company.\nThe company recently implemented Power BI to better understand its top customers, products, and suppliers.\nBusiness Issues -\nThe sales department relies on the IT department to generate reports in Microsoft SQL Server Reporting Services (SSRS). The IT department takes\ntoo long to generate the reports and often misunderstands the report requirements.\nExisting Environment. Data Sources\nNorthwind Traders uses the data sources shown in the following table.\nSource2 is exported daily from a third-party system and stored in Microsoft SharePoint Online.\nExisting Environment. Customer Worksheet\nSource2 contains a single worksheet named Customer Details. The first 11 rows of the worksheet are shown in the following table.\nAll the fields in Source2 are mandatory.\nThe Address column in Customer Details is the billing address, which can differ from the shipping address.\nExisting Environment. Azure SQL Database\nSource1 contains the following tables:\nOrders\nProducts\nSuppliers\nCategories\nOrder Details\nSales Employees\nThe Orders table contains the following columns.\nThe Order Details table contains the following columns.\nThe address in the Orders table is the shipping address, which can differ from the billing address.\nThe Products table contains the following columns.\nThe Categories table contains the following columns.\nThe Suppliers table contains the following columns.\nThe Sales Employees table contains the following columns.\nEach employee in the Sales Employees table is assigned to one sales region. Multiple employees can be assigned to each region.\nRequirements. Report Requirements\nNorthwind Traders requires the following reports:\nTop Products\nTop Customers\nOn-Time Shipping\nThe Top Customers report will show the top 20 customers based on the highest sales amounts in a selected order month or quarter, product\ncategory, and sales region.\nThe Top Products report will show the top 20 products based on the highest sales amounts sold in a selected order month or quarter, sales region,\nand product category. The report must also show which suppliers provide the top products.\nThe On-Time Shipping report will show the following metrics for a selected shipping month or quarter:\nThe percentage of orders that were shipped late by country and shipping region\nCustomers that had multiple late shipments during the last quarter\nNorthwind Traders defines late orders as those shipped after the required shipping date.\nThe warehouse shipping department must be notified if the percentage of late orders within the current month exceeds 5%.\nThe reports must show historical data for the current calendar year and the last three calendar years.\nRequirements. Technical Requirements\nNorthwind Traders identifies the following technical requirements:\nA single dataset must support all three reports.\nThe reports must be stored in a single Power BI workspace.\nReport data must be current as of 7 AM Pacific Time each day.\nThe reports must provide fast response times when users interact with a visualization.\nThe data model must minimize the size of the dataset as much as possible, while meeting the report requirements and the technical\nrequirements.\nRequirements. Security Requirements\nAccess to the reports must be granted to Azure Active Directory (Azure AD) security groups only. An Azure AD security group exists for each\ndepartment.\nThe sales department must be able to perform the following tasks in Power BI:\nCreate, edit, and delete content in the reports.\nManage permissions for workspaces, datasets, and reports.\nPublish, unpublish, update, and change the permissions for an app.\nAssign Azure AD groups role-based access to the reports workspace.\nUsers in the sales department must be able to access only the data of the sales region to which they are assigned in the Sales Employees table.\nPower BI has the following row-level security (RLS) Table filter DAX expression for the Sales Employees table.\n[EmailAddress] = USERNAME()\nRLS will be applied only to the sales department users. Users in all other departments must be able to view all the data.\nYou need to create the dataset.\nWhich dataset mode should you use?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. Import",
      "B. DirectQuery",
      "C. Composite",
      "D. live connection"
    ],
    correctAnswer: "C",
    explanation: "The three dataset modes are:\nImport -\nDirectQuery -\nComposite -\nComposite mode -\nComposite mode can mix Import and DirectQuery modes, or integrate multiple DirectQuery data sources. Models developed in Composite mode\nsupport configuring the storage mode for each model table. This mode also supports calculated tables (defined with DAX).\nThe table storage mode can be configured as Import, DirectQuery, or Dual. A table configured as Dual storage mode is both Import and\nDirectQuery, and this setting allows the Power BI service to determine the most efficient mode to use on a query-by-query basis.\nNote: A single dataset must support all three reports.\nThe data model must minimize the size of the dataset as much as possible, while meeting the report requirements and the technical\nrequirements.\nNorthwind Traders requires the following reports:\nTop Products -\nTop Customers -\nOn-Time Shipping -\nIncorrect:\n* DirectQuery mode is an alternative to Import mode. Models developed in DirectQuery mode don't import data. Instead, they consist only of\nmetadata defining the model structure. When the model is queried, native queries are used to retrieve data from the underlying data source.\n* Import\nHowever, while there are compelling advantages associated with Import models, there are disadvantages, too:\nThe entire model must be loaded to memory before Power BI can query the model, which can place pressure on available capacity resources,\nespecially as the number and size of Import models grow",
    communityVote: "A (52%)",
    isPremium: true
  },
  {
    id: 115,
    topic: "Topic 6",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nGeneral Overview -\nNorthwind Traders is a specialty food import company.\nThe company recently implemented Power BI to better understand its top customers, products, and suppliers.\nBusiness Issues -\nThe sales department relies on the IT department to generate reports in Microsoft SQL Server Reporting Services (SSRS). The IT department takes\ntoo long to generate the reports and often misunderstands the report requirements.\nExisting Environment. Data Sources\nNorthwind Traders uses the data sources shown in the following table.\nSource2 is exported daily from a third-party system and stored in Microsoft SharePoint Online.\nExisting Environment. Customer Worksheet\nSource2 contains a single worksheet named Customer Details. The first 11 rows of the worksheet are shown in the following table.\nAll the fields in Source2 are mandatory.\nThe Address column in Customer Details is the billing address, which can differ from the shipping address.\nExisting Environment. Azure SQL Database\nSource1 contains the following tables:\nOrders\nProducts\nSuppliers\nCategories\nOrder Details\nSales Employees\nThe Orders table contains the following columns.\nThe Order Details table contains the following columns.\nThe address in the Orders table is the shipping address, which can differ from the billing address.\nThe Products table contains the following columns.\nThe Categories table contains the following columns.\nThe Suppliers table contains the following columns.\nThe Sales Employees table contains the following columns.\nEach employee in the Sales Employees table is assigned to one sales region. Multiple employees can be assigned to each region.\nRequirements. Report Requirements\nNorthwind Traders requires the following reports:\nTop Products\nTop Customers\nOn-Time Shipping\nThe Top Customers report will show the top 20 customers based on the highest sales amounts in a selected order month or quarter, product\ncategory, and sales region.\nThe Top Products report will show the top 20 products based on the highest sales amounts sold in a selected order month or quarter, sales region,\nand product category. The report must also show which suppliers provide the top products.\nThe On-Time Shipping report will show the following metrics for a selected shipping month or quarter:\nThe percentage of orders that were shipped late by country and shipping region\nCustomers that had multiple late shipments during the last quarter\nNorthwind Traders defines late orders as those shipped after the required shipping date.\nThe warehouse shipping department must be notified if the percentage of late orders within the current month exceeds 5%.\nThe reports must show historical data for the current calendar year and the last three calendar years.\nRequirements. Technical Requirements\nNorthwind Traders identifies the following technical requirements:\nA single dataset must support all three reports.\nThe reports must be stored in a single Power BI workspace.\nReport data must be current as of 7 AM Pacific Time each day.\nThe reports must provide fast response times when users interact with a visualization.\nThe data model must minimize the size of the dataset as much as possible, while meeting the report requirements and the technical\nrequirements.\nRequirements. Security Requirements\nAccess to the reports must be granted to Azure Active Directory (Azure AD) security groups only. An Azure AD security group exists for each\ndepartment.\nThe sales department must be able to perform the following tasks in Power BI:\nCreate, edit, and delete content in the reports.\nManage permissions for workspaces, datasets, and reports.\nPublish, unpublish, update, and change the permissions for an app.\nAssign Azure AD groups role-based access to the reports workspace.\nUsers in the sales department must be able to access only the data of the sales region to which they are assigned in the Sales Employees table.\nPower BI has the following row-level security (RLS) Table filter DAX expression for the Sales Employees table.\n[EmailAddress] = USERNAME()\nRLS will be applied only to the sales department users. Users in all other departments must be able to view all the data.\nYou need to configure access for the sales department users. The solution must the meet the security requirements.\nWhat should you do?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. Share each report to the Azure Active Directory group of the sales department.",
      "B. Add the Azure Active Directory group of the sales department as an Admin of the reports workspace.",
      "C. Distribute an app to the users in the Azure Active Directory group of the sales department.",
      "D. Add the sales department as a member of the reports workspace."
    ],
    correctAnswer: "B",
    explanation: "Access to the reports must be granted to Azure Active Directory (Azure AD) security groups only. An Azure AD security group exists for each\ndepartment.\nThe sales department must be able to perform the following tasks in Power BI:\n• Create, edit, and delete content in the reports.\n• Manage permissions for workspaces, datasets, and reports.\n• Publish, unpublish, update, and change the permissions for an app.\n• Assign Azure AD groups role-based access to the reports workspace.",
    communityVote: "D (76%)",
    isPremium: true
  },
  {
    id: 116,
    topic: "Topic 6",
    type: "hotspot",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nGeneral Overview -\nNorthwind Traders is a specialty food import company.\nThe company recently implemented Power BI to better understand its top customers, products, and suppliers.\nBusiness Issues -\nThe sales department relies on the IT department to generate reports in Microsoft SQL Server Reporting Services (SSRS). The IT department takes\ntoo long to generate the reports and often misunderstands the report requirements.\nExisting Environment. Data Sources\nNorthwind Traders uses the data sources shown in the following table.\nSource2 is exported daily from a third-party system and stored in Microsoft SharePoint Online.\nExisting Environment. Customer Worksheet\nSource2 contains a single worksheet named Customer Details. The first 11 rows of the worksheet are shown in the following table.\nAll the fields in Source2 are mandatory.\nThe Address column in Customer Details is the billing address, which can differ from the shipping address.\nExisting Environment. Azure SQL Database\nSource1 contains the following tables:\nOrders\nProducts\nSuppliers\nCategories\nOrder Details\nSales Employees\nThe Orders table contains the following columns.\nThe Order Details table contains the following columns.\nThe address in the Orders table is the shipping address, which can differ from the billing address.\nThe Products table contains the following columns.\nThe Categories table contains the following columns.\nThe Suppliers table contains the following columns.\nThe Sales Employees table contains the following columns.\nEach employee in the Sales Employees table is assigned to one sales region. Multiple employees can be assigned to each region.\nRequirements. Report Requirements\nNorthwind Traders requires the following reports:\nTop Products\nTop Customers\nOn-Time Shipping\nThe Top Customers report will show the top 20 customers based on the highest sales amounts in a selected order month or quarter, product\ncategory, and sales region.\nThe Top Products report will show the top 20 products based on the highest sales amounts sold in a selected order month or quarter, sales region,\nand product category. The report must also show which suppliers provide the top products.\nThe On-Time Shipping report will show the following metrics for a selected shipping month or quarter:\nThe percentage of orders that were shipped late by country and shipping region\nCustomers that had multiple late shipments during the last quarter\nNorthwind Traders defines late orders as those shipped after the required shipping date.\nThe warehouse shipping department must be notified if the percentage of late orders within the current month exceeds 5%.\nThe reports must show historical data for the current calendar year and the last three calendar years.\nRequirements. Technical Requirements\nNorthwind Traders identifies the following technical requirements:\nA single dataset must support all three reports.\nThe reports must be stored in a single Power BI workspace.\nReport data must be current as of 7 AM Pacific Time each day.\nThe reports must provide fast response times when users interact with a visualization.\nThe data model must minimize the size of the dataset as much as possible, while meeting the report requirements and the technical\nrequirements.\nRequirements. Security Requirements\nAccess to the reports must be granted to Azure Active Directory (Azure AD) security groups only. An Azure AD security group exists for each\ndepartment.\nThe sales department must be able to perform the following tasks in Power BI:\nCreate, edit, and delete content in the reports.\nManage permissions for workspaces, datasets, and reports.\nPublish, unpublish, update, and change the permissions for an app.\nAssign Azure AD groups role-based access to the reports workspace.\nUsers in the sales department must be able to access only the data of the sales region to which they are assigned in the Sales Employees table.\nPower BI has the following row-level security (RLS) Table filter DAX expression for the Sales Employees table.\n[EmailAddress] = USERNAME()\nRLS will be applied only to the sales department users. Users in all other departments must be able to view all the data.\nYou need to create a solution to meet the notification requirements of the warehouse shipping department.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [],
    correctAnswer: "Box 1: dashboard -\nThe warehouse shipping department must be notified if the percentage of late orders within the current month exceeds 5%.\nYou can set alerts to notify you when data in your dashboards changes beyond limits you set.\nBox 2: data alert -",
    explanation: "Reference:",
    communityVote: null,
    isPremium: true
  },
  {
    id: 117,
    topic: "Topic 7",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that produces sports equipment. Contoso holds quarterly board meetings for which financial analysts\nmanually prepare\nMicrosoft Excel reports, including balance sheets and profit and loss statements for each of the company's four business units.\nExisting Environment -\nData and Sources -\nData for the reports comes from the sources shown in the following table.\nThe balance sheet data is unrelated to the profit and loss results other than they both relate to dates.\nBalance Sheet Data -\nThe balance sheet data is imported and includes the final monthly balances of each account in the format shown in the following table.\nThe balance sheet data always includes a row for each account for each month.\nProduct Catalog Data -\nThe product catalog shows how products roll up to product categories, which roll up to the business units. The product list is provided in the\nformat shown in the following table.\nRevenue data is provided at the date and product level. Expense data is provided at the date and department level.\nBusiness Issues -\nHistorically, it has taken two analysts a week to prepare the reports for the quarterly board meetings. Also, there is usually at least one issue each\nquarter where a value in a report is wrong because of a bad cell reference in an Excel formula. On occasion, there are conflicting results in the\nreports because the products and departments that roll up to each business unit are not defined consistently.\nRequirements -\nPlanned Changes -\nContoso plans to automate and standardize the quarterly reporting process by using Power BI. The company wants to reduce how long it takes to\npopulate the reports to less than two days. The company wants to create common logic for the business units, products, and departments. The\nlogic will be used across all reports, including but not limited to the quarterly reporting for the board.\nTechnical Requirements -\nContoso wants the reports and datasets refreshed with minimum manual effort.\nThe company wants to provide the board with a single package of reports that will contain custom navigation and links to supplementary\ninformation.\nMaintenance, including manually updating data and access, must be minimized as much as possible.\nSecurity Requirements -\nThe reports must be made available to the board from powerbi.com. An Azure Active Directory (Azure AD) group will be used to share information\nwith the board.\nContoso identifies the following security requirements for analyst access:\nAnalysts must be able to access all balance sheet and product catalog data.\nAnalysts must be able to access only the profit and loss data of their respective business unit.\nAnalysts must be able to create new reports from the dataset that contains the profit and loss data, but the reports built by the analysts must NOT\nbe included in the quarterly reports for the board.\nAnalysts must NOT be able to share the quarterly reports with anyone.\nAnalysts must NOT be able to make new reports by using the balance sheet data.\nReport Requirements -\nYou plan to relate the balance sheet table to a date table in Power BI in a many-to-one relationship based on the last day of the month. At least\none of the balance sheet reports in the quarterly reporting package must show the ending balances for the quarter, as well as for the previous\nquarter.\nThe date table will contain the columns shown in the following table.\nThe definitions and attributes for the products, departments, and business units must be consistent across all the reports.\nThe board must be able to get the following information from the quarterly reports:\nRevenue trends over time\nThe ending balances of each account\nChanges in long-term liabilities from the previous quarter\nThe percent of total revenue contributed by each product category\nA comparison of quarterly revenue versus the same quarter from the previous year\nThe reports must be updated with the latest data by 5 AM each day.\nYou need to create the relationship between the product list and the revenue results. The solution must minimize the time it takes to render\nvisuals.\nWhat should you set as the relationship cardinality?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. One to one",
      "B. Many to many",
      "C. Many to one",
      "D. One to many"
    ],
    correctAnswer: "D",
    explanation: "One product in the product list can occur many times in the revenue results.\nNote 1: One to many (1:*): In a one-to-many relationship, the column in one table has only one instance of a particular value, and the other\nrelated table can have more than one instance of a value.\nNote 2:\nRevenue data is provided at the date and product level.\nThe board must be able to get the following information from the quarterly reports:\nRevenue trends over time -\nThe percent of total revenue contributed by each product category\nA comparison of quarterly revenue versus the same quarter from the previous year\nReference:",
    communityVote: "D (100%)",
    isPremium: true
  },
  {
    id: 118,
    topic: "Topic 7",
    type: "hotspot",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that produces sports equipment. Contoso holds quarterly board meetings for which financial analysts\nmanually prepare\nMicrosoft Excel reports, including balance sheets and profit and loss statements for each of the company's four business units.\nExisting Environment -\nData and Sources -\nData for the reports comes from the sources shown in the following table.\nThe balance sheet data is unrelated to the profit and loss results other than they both relate to dates.\nBalance Sheet Data -\nThe balance sheet data is imported and includes the final monthly balances of each account in the format shown in the following table.\nThe balance sheet data always includes a row for each account for each month.\nProduct Catalog Data -\nThe product catalog shows how products roll up to product categories, which roll up to the business units. The product list is provided in the\nformat shown in the following table.\nRevenue data is provided at the date and product level. Expense data is provided at the date and department level.\nBusiness Issues -\nHistorically, it has taken two analysts a week to prepare the reports for the quarterly board meetings. Also, there is usually at least one issue each\nquarter where a value in a report is wrong because of a bad cell reference in an Excel formula. On occasion, there are conflicting results in the\nreports because the products and departments that roll up to each business unit are not defined consistently.\nRequirements -\nPlanned Changes -\nContoso plans to automate and standardize the quarterly reporting process by using Power BI. The company wants to reduce how long it takes to\npopulate the reports to less than two days. The company wants to create common logic for the business units, products, and departments. The\nlogic will be used across all reports, including but not limited to the quarterly reporting for the board.\nTechnical Requirements -\nContoso wants the reports and datasets refreshed with minimum manual effort.\nThe company wants to provide the board with a single package of reports that will contain custom navigation and links to supplementary\ninformation.\nMaintenance, including manually updating data and access, must be minimized as much as possible.\nSecurity Requirements -\nThe reports must be made available to the board from powerbi.com. An Azure Active Directory (Azure AD) group will be used to share information\nwith the board.\nContoso identifies the following security requirements for analyst access:\nAnalysts must be able to access all balance sheet and product catalog data.\nAnalysts must be able to access only the profit and loss data of their respective business unit.\nAnalysts must be able to create new reports from the dataset that contains the profit and loss data, but the reports built by the analysts must NOT\nbe included in the quarterly reports for the board.\nAnalysts must NOT be able to share the quarterly reports with anyone.\nAnalysts must NOT be able to make new reports by using the balance sheet data.\nReport Requirements -\nYou plan to relate the balance sheet table to a date table in Power BI in a many-to-one relationship based on the last day of the month. At least\none of the balance sheet reports in the quarterly reporting package must show the ending balances for the quarter, as well as for the previous\nquarter.\nThe date table will contain the columns shown in the following table.\nThe definitions and attributes for the products, departments, and business units must be consistent across all the reports.\nThe board must be able to get the following information from the quarterly reports:\nRevenue trends over time\nThe ending balances of each account\nChanges in long-term liabilities from the previous quarter\nThe percent of total revenue contributed by each product category\nA comparison of quarterly revenue versus the same quarter from the previous year\nThe reports must be updated with the latest data by 5 AM each day.\nYou need to create a measure that returns the percent of revenue by product category.\nHow should you complete the measure? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [],
    correctAnswer: "Box 1: CALCULATE -\nCALCULATE evaluates an expression in a modified filter context.\nSyntax: CALCULATE(<expression>[, <filter1> [, <filter2> [, ...]]])\nBox 2: REMOVEFILTERS -\nREMOVEFILTERS clear filters from the specified tables or columns.\nBox 3: DIVIDE -\nDIVIDE performs a division.\nExample: MEASURE FactInternetSales[%Sales] = DIVIDE([TotalSales], CALCULATE([TotalSales],REMOVEFILTERS()))\nNote: The RETURN keyword consumes variables defined in previous VAR statements.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: true
  },
  {
    id: 119,
    topic: "Topic 7",
    type: "dragdrop",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that produces sports equipment. Contoso holds quarterly board meetings for which financial analysts\nmanually prepare\nMicrosoft Excel reports, including balance sheets and profit and loss statements for each of the company's four business units.\nExisting Environment -\nData and Sources -\nData for the reports comes from the sources shown in the following table.\nThe balance sheet data is unrelated to the profit and loss results other than they both relate to dates.\nBalance Sheet Data -\nThe balance sheet data is imported and includes the final monthly balances of each account in the format shown in the following table.\nThe balance sheet data always includes a row for each account for each month.\nProduct Catalog Data -\nThe product catalog shows how products roll up to product categories, which roll up to the business units. The product list is provided in the\nformat shown in the following table.\nRevenue data is provided at the date and product level. Expense data is provided at the date and department level.\nBusiness Issues -\nHistorically, it has taken two analysts a week to prepare the reports for the quarterly board meetings. Also, there is usually at least one issue each\nquarter where a value in a report is wrong because of a bad cell reference in an Excel formula. On occasion, there are conflicting results in the\nreports because the products and departments that roll up to each business unit are not defined consistently.\nRequirements -\nPlanned Changes -\nContoso plans to automate and standardize the quarterly reporting process by using Power BI. The company wants to reduce how long it takes to\npopulate the reports to less than two days. The company wants to create common logic for the business units, products, and departments. The\nlogic will be used across all reports, including but not limited to the quarterly reporting for the board.\nTechnical Requirements -\nContoso wants the reports and datasets refreshed with minimum manual effort.\nThe company wants to provide the board with a single package of reports that will contain custom navigation and links to supplementary\ninformation.\nMaintenance, including manually updating data and access, must be minimized as much as possible.\nSecurity Requirements -\nThe reports must be made available to the board from powerbi.com. An Azure Active Directory (Azure AD) group will be used to share information\nwith the board.\nContoso identifies the following security requirements for analyst access:\nAnalysts must be able to access all balance sheet and product catalog data.\nAnalysts must be able to access only the profit and loss data of their respective business unit.\nAnalysts must be able to create new reports from the dataset that contains the profit and loss data, but the reports built by the analysts must NOT\nbe included in the quarterly reports for the board.\nAnalysts must NOT be able to share the quarterly reports with anyone.\nAnalysts must NOT be able to make new reports by using the balance sheet data.\nReport Requirements -\nYou plan to relate the balance sheet table to a date table in Power BI in a many-to-one relationship based on the last day of the month. At least\none of the balance sheet reports in the quarterly reporting package must show the ending balances for the quarter, as well as for the previous\nquarter.\nThe date table will contain the columns shown in the following table.\nThe definitions and attributes for the products, departments, and business units must be consistent across all the reports.\nThe board must be able to get the following information from the quarterly reports:\nRevenue trends over time\nThe ending balances of each account\nChanges in long-term liabilities from the previous quarter\nThe percent of total revenue contributed by each product category\nA comparison of quarterly revenue versus the same quarter from the previous year\nThe reports must be updated with the latest data by 5 AM each day.\nOnce the profit and loss dataset is created, which four actions should you perform in sequence to ensure that the business unit analysts see the\nappropriate profit and loss data? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the\ncorrect order.\nSelect and Place:\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [],
    correctAnswer: "Step 1: From BI Desktop, create four roles\nYou can define roles and rules within Power BI Desktop.\nStep 2: From BI Desktop, add a Table Filter DAX Expression to the roles.\nTo define security roles, follow these steps.\n1. From the Modeling tab, select Manage Roles.\n2. Select Manage Roles\n3. From the Manage roles window, select Create.\n4. Select Create\n5. Under Roles, provide a name for the role.\n6. Under Tables, select the table to which you want to apply a DAX rule.\n7. In the Table filter DAX expression box, enter the DAX expressions. This expression returns a value of true or false. For example: [Entity ID] =\n\"Value\".\nAfter you've created the DAX expression, select the checkmark above the expression box to validate the expression.\n8. Select Save.\nStep 3: From powerbi.com, add role members to the roles.\nYou can't assign users to a role within Power BI Desktop. You assign them in the Power BI service.\nStep 4: From BI Desktop, publish the dataset to powerbi.com\nNow that you're done validating the roles in Power BI Desktop, go ahead and publish your report to the Power BI service.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: true
  },
  {
    id: 120,
    topic: "Topic 7",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that produces sports equipment. Contoso holds quarterly board meetings for which financial analysts\nmanually prepare\nMicrosoft Excel reports, including balance sheets and profit and loss statements for each of the company's four business units.\nExisting Environment -\nData and Sources -\nData for the reports comes from the sources shown in the following table.\nThe balance sheet data is unrelated to the profit and loss results other than they both relate to dates.\nBalance Sheet Data -\nThe balance sheet data is imported and includes the final monthly balances of each account in the format shown in the following table.\nThe balance sheet data always includes a row for each account for each month.\nProduct Catalog Data -\nThe product catalog shows how products roll up to product categories, which roll up to the business units. The product list is provided in the\nformat shown in the following table.\nRevenue data is provided at the date and product level. Expense data is provided at the date and department level.\nBusiness Issues -\nHistorically, it has taken two analysts a week to prepare the reports for the quarterly board meetings. Also, there is usually at least one issue each\nquarter where a value in a report is wrong because of a bad cell reference in an Excel formula. On occasion, there are conflicting results in the\nreports because the products and departments that roll up to each business unit are not defined consistently.\nRequirements -\nPlanned Changes -\nContoso plans to automate and standardize the quarterly reporting process by using Power BI. The company wants to reduce how long it takes to\npopulate the reports to less than two days. The company wants to create common logic for the business units, products, and departments. The\nlogic will be used across all reports, including but not limited to the quarterly reporting for the board.\nTechnical Requirements -\nContoso wants the reports and datasets refreshed with minimum manual effort.\nThe company wants to provide the board with a single package of reports that will contain custom navigation and links to supplementary\ninformation.\nMaintenance, including manually updating data and access, must be minimized as much as possible.\nSecurity Requirements -\nThe reports must be made available to the board from powerbi.com. An Azure Active Directory (Azure AD) group will be used to share information\nwith the board.\nContoso identifies the following security requirements for analyst access:\nAnalysts must be able to access all balance sheet and product catalog data.\nAnalysts must be able to access only the profit and loss data of their respective business unit.\nAnalysts must be able to create new reports from the dataset that contains the profit and loss data, but the reports built by the analysts must NOT\nbe included in the quarterly reports for the board.\nAnalysts must NOT be able to share the quarterly reports with anyone.\nAnalysts must NOT be able to make new reports by using the balance sheet data.\nReport Requirements -\nYou plan to relate the balance sheet table to a date table in Power BI in a many-to-one relationship based on the last day of the month. At least\none of the balance sheet reports in the quarterly reporting package must show the ending balances for the quarter, as well as for the previous\nquarter.\nThe date table will contain the columns shown in the following table.\nThe definitions and attributes for the products, departments, and business units must be consistent across all the reports.\nThe board must be able to get the following information from the quarterly reports:\nRevenue trends over time\nThe ending balances of each account\nChanges in long-term liabilities from the previous quarter\nThe percent of total revenue contributed by each product category\nA comparison of quarterly revenue versus the same quarter from the previous year\nThe reports must be updated with the latest data by 5 AM each day.\nWhich DAX expression should you use to get the ending balances in the balance sheet reports?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. CALCULATE ( SUM( BalanceSheet[BalanceAmount] ), LASTDATE ( 'Date'[Date] ) )",
      "B. CALCULATE ( SUM( BalanceSheet[BalanceAmount] ), DATESQTD('Date'[Date]) )",
      "C. FIRSTNONBLANK ('Date'[Date] SUM( BalanceSheet[BalanceAmount] ) )",
      "D. CALCULATE ( MAX( BalanceSheet[BalanceAmount] ), LASTDATE ('Date'[Date] ))"
    ],
    correctAnswer: "B",
    explanation: "Use the CALCULATE, the SUM, and the DATESQTD functions.\nDATESQTD returns a table that contains a column of the dates for the quarter to date, in the current context.\nSyntax: DATESQTD(<dates>)\nNote: At least one of the balance sheet reports in the quarterly reporting package must show the ending balances for the quarter, as well as for\nthe previous quarter.\nReference:",
    communityVote: "A (57%)",
    isPremium: true
  },
  {
    id: 121,
    topic: "Topic 8",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an online retailer that uses Power BI.\nLitware plans to leverage data from an Azure SQL database that stores data for the company's live e-commerce website.\nLitware uses Azure Active Directory (Azure AD) to authenticate users.\nExisting Environment. Sales Data\nLitware has online sales data that has the SQL schema shown in the following table.\nIn the Date table, the date_id column has a format of yyyymmdd and the month column has a format of yyyymm.\nThe week column in the Date table and the week_id column in the Weekly_Returns table have a format of yyyyww.\nIn the Sales table, the sales_id column represents a unique transaction.\nThe region id column can be managed by only one sales manager.\nExisting Environment. Data Concerns\nYou are concerned with the quality and completeness of the sales data. You must ensure that negative and missing sales_amount values do NOT\ncontribute to the total sales amount calculation.\nExisting Environment. Reporting Requirements\nLitware identifies the following reporting requirements:\nExecutives require a visual that shows sales by region.\nExecutives require a visual that shows returns by region manager and the sales managers that report to them.\nThe sales managers must be able to see only the sales data of their respective region.\nThe sales managers require a visual to analyze sales performance versus sales targets.\nThe sales department requires reports that contain the number of sales transactions.\nUsers must be able to see the month in each report as shown in the following example: Feb 2020.\nThe customer service department requires a visual that can be filtered by both sales month and ship month independently.\nThe maximum allowed latency to include transactions in reports is five minutes.\nYou need to create relationships to meet the reporting requirements of the customer service department.\nWhat should you create?\nWeekly_Returns[week_id]\nDate[date_id]\nrelationship from Sales[sales_ship_date_id] to ShipDate[date_id]\nrelationship from ShipDate[date_id] to Sales[sales_skip_date_id]\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. a one-to-many relationship from Date[date_id] to Sales[sales_date_id] and another one-to-many relationship from Date[date_id] to",
      "B. a one-to-many relationship from Sales[sales_date_id] to Date[date_id] and a one-to-many relationship from Sales[sales_ship_date_id] to",
      "C. an additional date table named ShipDate, a many-to-many relationship from Sales[sales_date_id] to Date[date_id], and a many-to-many",
      "D. an additional date table named ShipDate, a one-to-many relationship from Date[date_id] to Sales[sales_date_id], and a one-to-many"
    ],
    correctAnswer: "A",
    explanation: "The customer service department requires a visual that can be filtered by both sales month and ship month independently.\nNeed two date tables. Add a one-to-many relationship from both the Date tables to Sales table.\nReference:",
    communityVote: "D (88%)",
    isPremium: true
  },
  {
    id: 122,
    topic: "Topic 8",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an online retailer that uses Power BI.\nLitware plans to leverage data from an Azure SQL database that stores data for the company's live e-commerce website.\nLitware uses Azure Active Directory (Azure AD) to authenticate users.\nExisting Environment. Sales Data\nLitware has online sales data that has the SQL schema shown in the following table.\nIn the Date table, the date_id column has a format of yyyymmdd and the month column has a format of yyyymm.\nThe week column in the Date table and the week_id column in the Weekly_Returns table have a format of yyyyww.\nIn the Sales table, the sales_id column represents a unique transaction.\nThe region id column can be managed by only one sales manager.\nExisting Environment. Data Concerns\nYou are concerned with the quality and completeness of the sales data. You must ensure that negative and missing sales_amount values do NOT\ncontribute to the total sales amount calculation.\nExisting Environment. Reporting Requirements\nLitware identifies the following reporting requirements:\nExecutives require a visual that shows sales by region.\nExecutives require a visual that shows returns by region manager and the sales managers that report to them.\nThe sales managers must be able to see only the sales data of their respective region.\nThe sales managers require a visual to analyze sales performance versus sales targets.\nThe sales department requires reports that contain the number of sales transactions.\nUsers must be able to see the month in each report as shown in the following example: Feb 2020.\nThe customer service department requires a visual that can be filtered by both sales month and ship month independently.\nThe maximum allowed latency to include transactions in reports is five minutes.\nYou need to provide a solution to provide the sales managers with the required access.\nWhat should you include in the solution?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. Create a security role that has a table filter on the Sales Manager table where username = UserName().",
      "B. Create a security role that has a table filter on the Sales Manager table where username = sales_manager_id.",
      "C. Create a security role that has a table filter on the Region Manager table where sales_manager_id = UserPrincipalName().",
      "D. Create a security role that has a table filter on the Sales_Manager table where name = UserName()."
    ],
    correctAnswer: "A",
    explanation: "The sales managers must be able to see only the sales data of their respective region.\nUse the username field of the Sales_manager table.\nAlso use the Username() DAX function to validate the username.\nReference:",
    communityVote: "A (100%)",
    isPremium: true
  },
  {
    id: 123,
    topic: "Topic 8",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an online retailer that uses Power BI.\nLitware plans to leverage data from an Azure SQL database that stores data for the company's live e-commerce website.\nLitware uses Azure Active Directory (Azure AD) to authenticate users.\nExisting Environment. Sales Data\nLitware has online sales data that has the SQL schema shown in the following table.\nIn the Date table, the date_id column has a format of yyyymmdd and the month column has a format of yyyymm.\nThe week column in the Date table and the week_id column in the Weekly_Returns table have a format of yyyyww.\nIn the Sales table, the sales_id column represents a unique transaction.\nThe region id column can be managed by only one sales manager.\nExisting Environment. Data Concerns\nYou are concerned with the quality and completeness of the sales data. You must ensure that negative and missing sales_amount values do NOT\ncontribute to the total sales amount calculation.\nExisting Environment. Reporting Requirements\nLitware identifies the following reporting requirements:\nExecutives require a visual that shows sales by region.\nExecutives require a visual that shows returns by region manager and the sales managers that report to them.\nThe sales managers must be able to see only the sales data of their respective region.\nThe sales managers require a visual to analyze sales performance versus sales targets.\nThe sales department requires reports that contain the number of sales transactions.\nUsers must be able to see the month in each report as shown in the following example: Feb 2020.\nThe customer service department requires a visual that can be filtered by both sales month and ship month independently.\nThe maximum allowed latency to include transactions in reports is five minutes.\nYou merge data from Sales_Region, Region_Manager, Sales_Manager, and Manager into a single table named Region.\nWhat should you do next to meet the reporting requirements of the executives?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. Create a DAX calculated column that retrieves the region manager from the Weekly_Returns table based on the sales_region_id column.",
      "B. Apply row-level security (RLS) to the Region table based on the sales manager username.",
      "C. Configure a bi-directional relationship between Region and Sales_Region.",
      "D. In the Region table, create a hierarchy that has the manager name, and then the sales manager name."
    ],
    correctAnswer: "A",
    explanation: "Executives require a visual that shows returns by region manager and the sales managers that report to them.\nA hierarchy is a set of fields categorized in a hierarchical way that one level is the parent of another level. Values of the parent level can be\ndrilled down to the lower level.\nReference:",
    communityVote: "D (100%)",
    isPremium: true
  },
  {
    id: 124,
    topic: "Topic 8",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an online retailer that uses Power BI.\nLitware plans to leverage data from an Azure SQL database that stores data for the company's live e-commerce website.\nLitware uses Azure Active Directory (Azure AD) to authenticate users.\nExisting Environment. Sales Data\nLitware has online sales data that has the SQL schema shown in the following table.\nIn the Date table, the date_id column has a format of yyyymmdd and the month column has a format of yyyymm.\nThe week column in the Date table and the week_id column in the Weekly_Returns table have a format of yyyyww.\nIn the Sales table, the sales_id column represents a unique transaction.\nThe region id column can be managed by only one sales manager.\nExisting Environment. Data Concerns\nYou are concerned with the quality and completeness of the sales data. You must ensure that negative and missing sales_amount values do NOT\ncontribute to the total sales amount calculation.\nExisting Environment. Reporting Requirements\nLitware identifies the following reporting requirements:\nExecutives require a visual that shows sales by region.\nExecutives require a visual that shows returns by region manager and the sales managers that report to them.\nThe sales managers must be able to see only the sales data of their respective region.\nThe sales managers require a visual to analyze sales performance versus sales targets.\nThe sales department requires reports that contain the number of sales transactions.\nUsers must be able to see the month in each report as shown in the following example: Feb 2020.\nThe customer service department requires a visual that can be filtered by both sales month and ship month independently.\nThe maximum allowed latency to include transactions in reports is five minutes.\nWhat should you create to meet the reporting requirements of the sales department?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. a measure that uses a formula of COUNTROWS(Sales)",
      "B. a calculated column that use a formula of COUNTA(Sales[sales_id])",
      "C. a calculated column that uses a formula of SUM(Sales[sales_id])",
      "D. a measure that uses a formula of SUM(Sales[sales_id])"
    ],
    correctAnswer: "A",
    explanation: "The sales department requires reports that contain the number of sales transactions.\nThe COUNTROWS function counts the number of rows in the specified table, or in a table defined by an expression.\nIncorrect:\nThe COUNTA function counts the number of cells in a column that are not empty.\nReference:",
    communityVote: "A (100%)",
    isPremium: true
  },
  {
    id: 125,
    topic: "Topic 8",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an online retailer that uses Power BI.\nLitware plans to leverage data from an Azure SQL database that stores data for the company's live e-commerce website.\nLitware uses Azure Active Directory (Azure AD) to authenticate users.\nExisting Environment. Sales Data\nLitware has online sales data that has the SQL schema shown in the following table.\nIn the Date table, the date_id column has a format of yyyymmdd and the month column has a format of yyyymm.\nThe week column in the Date table and the week_id column in the Weekly_Returns table have a format of yyyyww.\nIn the Sales table, the sales_id column represents a unique transaction.\nThe region id column can be managed by only one sales manager.\nExisting Environment. Data Concerns\nYou are concerned with the quality and completeness of the sales data. You must ensure that negative and missing sales_amount values do NOT\ncontribute to the total sales amount calculation.\nExisting Environment. Reporting Requirements\nLitware identifies the following reporting requirements:\nExecutives require a visual that shows sales by region.\nExecutives require a visual that shows returns by region manager and the sales managers that report to them.\nThe sales managers must be able to see only the sales data of their respective region.\nThe sales managers require a visual to analyze sales performance versus sales targets.\nThe sales department requires reports that contain the number of sales transactions.\nUsers must be able to see the month in each report as shown in the following example: Feb 2020.\nThe customer service department requires a visual that can be filtered by both sales month and ship month independently.\nThe maximum allowed latency to include transactions in reports is five minutes.\nWhat should you do to address the existing environment data concerns?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. a calculated column that uses the following formula: ABS(Sales[sales_amount])",
      "B. a measure that uses the following formula: SUMX(FILTER('Sales', 'Sales'[sales_amount] > 0)),[sales_amount])",
      "C. a measure that uses the following formula: SUM(Sales[sales_amount])",
      "D. a calculated column that uses the following formula: IF(ISBLANK(Sales[sales_amount]),0, (Sales[sales_amount]))"
    ],
    correctAnswer: "B",
    explanation: "You are concerned with the quality and completeness of the sales data. You must ensure that negative and missing sales_amount values do\nNOT contribute to the total sales amount calculation.",
    communityVote: "B (70%)",
    isPremium: true
  },
  {
    id: 126,
    topic: "Topic 8",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an online retailer that uses Power BI.\nLitware plans to leverage data from an Azure SQL database that stores data for the company's live e-commerce website.\nLitware uses Azure Active Directory (Azure AD) to authenticate users.\nExisting Environment. Sales Data\nLitware has online sales data that has the SQL schema shown in the following table.\nIn the Date table, the date_id column has a format of yyyymmdd and the month column has a format of yyyymm.\nThe week column in the Date table and the week_id column in the Weekly_Returns table have a format of yyyyww.\nIn the Sales table, the sales_id column represents a unique transaction.\nThe region id column can be managed by only one sales manager.\nExisting Environment. Data Concerns\nYou are concerned with the quality and completeness of the sales data. You must ensure that negative and missing sales_amount values do NOT\ncontribute to the total sales amount calculation.\nExisting Environment. Reporting Requirements\nLitware identifies the following reporting requirements:\nExecutives require a visual that shows sales by region.\nExecutives require a visual that shows returns by region manager and the sales managers that report to them.\nThe sales managers must be able to see only the sales data of their respective region.\nThe sales managers require a visual to analyze sales performance versus sales targets.\nThe sales department requires reports that contain the number of sales transactions.\nUsers must be able to see the month in each report as shown in the following example: Feb 2020.\nThe customer service department requires a visual that can be filtered by both sales month and ship month independently.\nThe maximum allowed latency to include transactions in reports is five minutes.\nYou need to create a calculated column to display the month based on the reporting requirements.\nWhich DAX expression should you use?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. FORMAT('Date'[date],\"MMM YYYY\")",
      "B. FORMAT('Date'[date_id],\"MMM\") & ג €\" & FORMAT('Date'[year], ג#€\")",
      "C. FORMAT('Date'[date_id],\"MMM YYYY\")",
      "D. FORMAT('Date'[date],\"M YY\")"
    ],
    correctAnswer: "A",
    explanation: "Users must be able to see the month in each report as shown in the following example: Feb 2020.\nCustom date/time formats -\nThe following format characters can be specified in the format_string to create custom date/time formats:\n* mmm\nDisplay the month as an abbreviation (Jan-Dec). Localized.\n* yyyy\nDisplay the year as a 4-digit number (100-9999).\n* Etc.\nReference:",
    communityVote: "A (100%)",
    isPremium: true
  },
  {
    id: 127,
    topic: "Topic 9",
    type: "hotspot",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nGeneral Overview -\nNorthwind Traders is a specialty food import company.\nThe company recently implemented Power BI to better understand its top customers, products, and suppliers.\nBusiness Issues -\nThe sales department relies on the IT department to generate reports in Microsoft SQL Server Reporting Services (SSRS). The IT department takes\ntoo long to generate the reports and often misunderstands the report requirements.\nExisting Environment. Data Sources\nNorthwind Traders uses the data sources shown in the following table.\nSource2 is exported daily from a third-party system and stored in Microsoft SharePoint Online.\nExisting Environment. Customer Worksheet\nSource2 contains a single worksheet named Customer Details. The first 11 rows of the worksheet are shown in the following table.\nAll the fields in Source2 are mandatory.\nThe Address column in Customer Details is the billing address, which can differ from the shipping address.\nExisting Environment. Azure SQL Database\nSource1 contains the following tables:\nOrders\nProducts\nSuppliers\nCategories\nOrder Details\nSales Employees\nThe Orders table contains the following columns.\nThe Order Details table contains the following columns.\nThe address in the Orders table is the shipping address, which can differ from the billing address.\nThe Products table contains the following columns.\nThe Categories table contains the following columns.\nThe Suppliers table contains the following columns.\nThe Sales Employees table contains the following columns.\nEach employee in the Sales Employees table is assigned to one sales region. Multiple employees can be assigned to each region.\nRequirements. Report Requirements\nNorthwind Traders requires the following reports:\nTop Products\nTop Customers\nOn-Time Shipping\nThe Top Customers report will show the top 20 customers based on the highest sales amounts in a selected order month or quarter, product\ncategory, and sales region.\nThe Top Products report will show the top 20 products based on the highest sales amounts sold in a selected order month or quarter, sales region,\nand product category. The report must also show which suppliers provide the top products.\nThe On-Time Shipping report will show the following metrics for a selected shipping month or quarter:\nThe percentage of orders that were shipped late by country and shipping region\nCustomers that had multiple late shipments during the last quarter\nNorthwind Traders defines late orders as those shipped after the required shipping date.\nThe warehouse shipping department must be notified if the percentage of late orders within the current month exceeds 5%.\nThe reports must show historical data for the current calendar year and the last three calendar years.\nRequirements. Technical Requirements\nNorthwind Traders identifies the following technical requirements:\nA single dataset must support all three reports.\nThe reports must be stored in a single Power BI workspace.\nReport data must be current as of 7 AM Pacific Time each day.\nThe reports must provide fast response times when users interact with a visualization.\nThe data model must minimize the size of the dataset as much as possible, while meeting the report requirements and the technical\nrequirements.\nRequirements. Security Requirements\nAccess to the reports must be granted to Azure Active Directory (Azure AD) security groups only. An Azure AD security group exists for each\ndepartment.\nThe sales department must be able to perform the following tasks in Power BI:\nCreate, edit, and delete content in the reports.\nManage permissions for workspaces, datasets, and reports.\nPublish, unpublish, update, and change the permissions for an app.\nAssign Azure AD groups role-based access to the reports workspace.\nUsers in the sales department must be able to access only the data of the sales region to which they are assigned in the Sales Employees table.\nPower BI has the following row-level security (RLS) Table filter DAX expression for the Sales Employees table.\n[EmailAddress] = USERNAME()\nRLS will be applied only to the sales department users. Users in all other departments must be able to view all the data.\nYou need to design the data model and the relationships for the Customer Details worksheet and the Orders table by using Power BI. The solution\nmust meet the report requirements.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [],
    correctAnswer: "Box 1: Yes -\nNeed to link the tables for: The Top Customers report will show the top 20 customers based on the highest sales amounts in a selected order\nmonth or quarter, product category, and sales region.\nBox 2: No -\nIt should be set to Integer.\nBox 3: No -\nCan use the Region field of the Customer Details table.\nThe Orders table only has the ShipRegion field",
    explanation: "",
    communityVote: null,
    isPremium: true
  },
  {
    id: 128,
    topic: "Topic 9",
    type: "hotspot",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nGeneral Overview -\nNorthwind Traders is a specialty food import company.\nThe company recently implemented Power BI to better understand its top customers, products, and suppliers.\nBusiness Issues -\nThe sales department relies on the IT department to generate reports in Microsoft SQL Server Reporting Services (SSRS). The IT department takes\ntoo long to generate the reports and often misunderstands the report requirements.\nExisting Environment. Data Sources\nNorthwind Traders uses the data sources shown in the following table.\nSource2 is exported daily from a third-party system and stored in Microsoft SharePoint Online.\nExisting Environment. Customer Worksheet\nSource2 contains a single worksheet named Customer Details. The first 11 rows of the worksheet are shown in the following table.\nAll the fields in Source2 are mandatory.\nThe Address column in Customer Details is the billing address, which can differ from the shipping address.\nExisting Environment. Azure SQL Database\nSource1 contains the following tables:\nOrders\nProducts\nSuppliers\nCategories\nOrder Details\nSales Employees\nThe Orders table contains the following columns.\nThe Order Details table contains the following columns.\nThe address in the Orders table is the shipping address, which can differ from the billing address.\nThe Products table contains the following columns.\nThe Categories table contains the following columns.\nThe Suppliers table contains the following columns.\nThe Sales Employees table contains the following columns.\nEach employee in the Sales Employees table is assigned to one sales region. Multiple employees can be assigned to each region.\nRequirements. Report Requirements\nNorthwind Traders requires the following reports:\nTop Products\nTop Customers\nOn-Time Shipping\nThe Top Customers report will show the top 20 customers based on the highest sales amounts in a selected order month or quarter, product\ncategory, and sales region.\nThe Top Products report will show the top 20 products based on the highest sales amounts sold in a selected order month or quarter, sales region,\nand product category. The report must also show which suppliers provide the top products.\nThe On-Time Shipping report will show the following metrics for a selected shipping month or quarter:\nThe percentage of orders that were shipped late by country and shipping region\nCustomers that had multiple late shipments during the last quarter\nNorthwind Traders defines late orders as those shipped after the required shipping date.\nThe warehouse shipping department must be notified if the percentage of late orders within the current month exceeds 5%.\nThe reports must show historical data for the current calendar year and the last three calendar years.\nRequirements. Technical Requirements\nNorthwind Traders identifies the following technical requirements:\nA single dataset must support all three reports.\nThe reports must be stored in a single Power BI workspace.\nReport data must be current as of 7 AM Pacific Time each day.\nThe reports must provide fast response times when users interact with a visualization.\nThe data model must minimize the size of the dataset as much as possible, while meeting the report requirements and the technical\nrequirements.\nRequirements. Security Requirements\nAccess to the reports must be granted to Azure Active Directory (Azure AD) security groups only. An Azure AD security group exists for each\ndepartment.\nThe sales department must be able to perform the following tasks in Power BI:\nCreate, edit, and delete content in the reports.\nManage permissions for workspaces, datasets, and reports.\nPublish, unpublish, update, and change the permissions for an app.\nAssign Azure AD groups role-based access to the reports workspace.\nUsers in the sales department must be able to access only the data of the sales region to which they are assigned in the Sales Employees table.\nPower BI has the following row-level security (RLS) Table filter DAX expression for the Sales Employees table.\n[EmailAddress] = USERNAME()\nRLS will be applied only to the sales department users. Users in all other departments must be able to view all the data.\nYou need to create a measure that will return the percentage of late orders.\nHow should you complete the DAX expression? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [],
    correctAnswer: "Box 1: CALCULATE -\nCALCULATE evaluates an expression in a modified filter context.\nSyntax: CALCULATE(<expression>[, <filter1> [, <filter2> [, ...]]]) expression - The expression to be evaluated. filter1, filter2,.. - (Optional) Boolean\nexpressions or table expressions that defines filters, or filter modifier functions.\nIncorrect:\n* COUNTX - Counts the number of rows that contain a non-blank value or an expression that evaluates to a non-blank value, when evaluating an\nexpression over a table.\n* CALCULATETABLE evaluates a table expression in a modified filter context.\nSyntax: CALCULATETABLE(<expression>[, <filter1> [, <filter2> [, ...]]])\nExpression - The table expression to be evaluated.\nBox 2: FILTER -\nFILTER returns a table that represents a subset of another table or expression.\nSyntax: FILTER(<table>,<filter>)\nBox 3: Orders[ShippedDate] > Orders[RequiredDate]\nNorthwind Traders defines late orders as those shipped after the required shipping date.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: true
  },
  {
    id: 129,
    topic: "Topic 9",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nGeneral Overview -\nNorthwind Traders is a specialty food import company.\nThe company recently implemented Power BI to better understand its top customers, products, and suppliers.\nBusiness Issues -\nThe sales department relies on the IT department to generate reports in Microsoft SQL Server Reporting Services (SSRS). The IT department takes\ntoo long to generate the reports and often misunderstands the report requirements.\nExisting Environment. Data Sources\nNorthwind Traders uses the data sources shown in the following table.\nSource2 is exported daily from a third-party system and stored in Microsoft SharePoint Online.\nExisting Environment. Customer Worksheet\nSource2 contains a single worksheet named Customer Details. The first 11 rows of the worksheet are shown in the following table.\nAll the fields in Source2 are mandatory.\nThe Address column in Customer Details is the billing address, which can differ from the shipping address.\nExisting Environment. Azure SQL Database\nSource1 contains the following tables:\nOrders\nProducts\nSuppliers\nCategories\nOrder Details\nSales Employees\nThe Orders table contains the following columns.\nThe Order Details table contains the following columns.\nThe address in the Orders table is the shipping address, which can differ from the billing address.\nThe Products table contains the following columns.\nThe Categories table contains the following columns.\nThe Suppliers table contains the following columns.\nThe Sales Employees table contains the following columns.\nEach employee in the Sales Employees table is assigned to one sales region. Multiple employees can be assigned to each region.\nRequirements. Report Requirements\nNorthwind Traders requires the following reports:\nTop Products\nTop Customers\nOn-Time Shipping\nThe Top Customers report will show the top 20 customers based on the highest sales amounts in a selected order month or quarter, product\ncategory, and sales region.\nThe Top Products report will show the top 20 products based on the highest sales amounts sold in a selected order month or quarter, sales region,\nand product category. The report must also show which suppliers provide the top products.\nThe On-Time Shipping report will show the following metrics for a selected shipping month or quarter:\nThe percentage of orders that were shipped late by country and shipping region\nCustomers that had multiple late shipments during the last quarter\nNorthwind Traders defines late orders as those shipped after the required shipping date.\nThe warehouse shipping department must be notified if the percentage of late orders within the current month exceeds 5%.\nThe reports must show historical data for the current calendar year and the last three calendar years.\nRequirements. Technical Requirements\nNorthwind Traders identifies the following technical requirements:\nA single dataset must support all three reports.\nThe reports must be stored in a single Power BI workspace.\nReport data must be current as of 7 AM Pacific Time each day.\nThe reports must provide fast response times when users interact with a visualization.\nThe data model must minimize the size of the dataset as much as possible, while meeting the report requirements and the technical\nrequirements.\nRequirements. Security Requirements\nAccess to the reports must be granted to Azure Active Directory (Azure AD) security groups only. An Azure AD security group exists for each\ndepartment.\nThe sales department must be able to perform the following tasks in Power BI:\nCreate, edit, and delete content in the reports.\nManage permissions for workspaces, datasets, and reports.\nPublish, unpublish, update, and change the permissions for an app.\nAssign Azure AD groups role-based access to the reports workspace.\nUsers in the sales department must be able to access only the data of the sales region to which they are assigned in the Sales Employees table.\nPower BI has the following row-level security (RLS) Table filter DAX expression for the Sales Employees table.\n[EmailAddress] = USERNAME()\nRLS will be applied only to the sales department users. Users in all other departments must be able to view all the data.\nYou need to minimize the size of the dataset. The solution must meet the report requirements.\nWhat should you do?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. Group the Categories table by the CategoryID column.",
      "B. Remove the QuantityPerUnit column from the Products table.",
      "C. Filter out discontinued products while importing the Products table.",
      "D. Change the OrderID column in the Orders table to the Text data type."
    ],
    correctAnswer: "B",
    explanation: "Removing a column which isn't used in the reports reduces the dataset size.\nIncorrect:\nNot A: Grouping does not affect size.\nNot C: Cannot filter out discontinued products as: The reports must show historical data for the current calendar year and the last three\ncalendar years.\nNot D: OrderID must be Integer.",
    communityVote: "B (100%)",
    isPremium: true
  },
  {
    id: 130,
    topic: "Topic 9",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nGeneral Overview -\nNorthwind Traders is a specialty food import company.\nThe company recently implemented Power BI to better understand its top customers, products, and suppliers.\nBusiness Issues -\nThe sales department relies on the IT department to generate reports in Microsoft SQL Server Reporting Services (SSRS). The IT department takes\ntoo long to generate the reports and often misunderstands the report requirements.\nExisting Environment. Data Sources\nNorthwind Traders uses the data sources shown in the following table.\nSource2 is exported daily from a third-party system and stored in Microsoft SharePoint Online.\nExisting Environment. Customer Worksheet\nSource2 contains a single worksheet named Customer Details. The first 11 rows of the worksheet are shown in the following table.\nAll the fields in Source2 are mandatory.\nThe Address column in Customer Details is the billing address, which can differ from the shipping address.\nExisting Environment. Azure SQL Database\nSource1 contains the following tables:\nOrders\nProducts\nSuppliers\nCategories\nOrder Details\nSales Employees\nThe Orders table contains the following columns.\nThe Order Details table contains the following columns.\nThe address in the Orders table is the shipping address, which can differ from the billing address.\nThe Products table contains the following columns.\nThe Categories table contains the following columns.\nThe Suppliers table contains the following columns.\nThe Sales Employees table contains the following columns.\nEach employee in the Sales Employees table is assigned to one sales region. Multiple employees can be assigned to each region.\nRequirements. Report Requirements\nNorthwind Traders requires the following reports:\nTop Products\nTop Customers\nOn-Time Shipping\nThe Top Customers report will show the top 20 customers based on the highest sales amounts in a selected order month or quarter, product\ncategory, and sales region.\nThe Top Products report will show the top 20 products based on the highest sales amounts sold in a selected order month or quarter, sales region,\nand product category. The report must also show which suppliers provide the top products.\nThe On-Time Shipping report will show the following metrics for a selected shipping month or quarter:\nThe percentage of orders that were shipped late by country and shipping region\nCustomers that had multiple late shipments during the last quarter\nNorthwind Traders defines late orders as those shipped after the required shipping date.\nThe warehouse shipping department must be notified if the percentage of late orders within the current month exceeds 5%.\nThe reports must show historical data for the current calendar year and the last three calendar years.\nRequirements. Technical Requirements\nNorthwind Traders identifies the following technical requirements:\nA single dataset must support all three reports.\nThe reports must be stored in a single Power BI workspace.\nReport data must be current as of 7 AM Pacific Time each day.\nThe reports must provide fast response times when users interact with a visualization.\nThe data model must minimize the size of the dataset as much as possible, while meeting the report requirements and the technical\nrequirements.\nRequirements. Security Requirements\nAccess to the reports must be granted to Azure Active Directory (Azure AD) security groups only. An Azure AD security group exists for each\ndepartment.\nThe sales department must be able to perform the following tasks in Power BI:\nCreate, edit, and delete content in the reports.\nManage permissions for workspaces, datasets, and reports.\nPublish, unpublish, update, and change the permissions for an app.\nAssign Azure AD groups role-based access to the reports workspace.\nUsers in the sales department must be able to access only the data of the sales region to which they are assigned in the Sales Employees table.\nPower BI has the following row-level security (RLS) Table filter DAX expression for the Sales Employees table.\n[EmailAddress] = USERNAME()\nRLS will be applied only to the sales department users. Users in all other departments must be able to view all the data.\nYou need to design the data model to meet the report requirements.\nWhat should you do in Power BI Desktop?\nto the ShippedDate column in the Orders table.\ncalendar month of the OrderDate column, the calendar quarter of the ShippedDate column, and the calendar month of the ShippedDate\ncolumn.\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. From Power Query, add a date table. Create an active relationship to the OrderDate column in the Orders table and an inactive relationship",
      "B. From Power Query, add columns to the Orders table to calculate the calendar quarter and the calendar month of the OrderDate column.",
      "C. From Power BI Desktop, use the Auto date/time option when creating the reports.",
      "D. From Power Query, use a DAX expression to add columns to the Orders table to calculate the calendar quarter of the OrderDate column, the"
    ],
    correctAnswer: "C",
    explanation: "On-Time Shipping report -\nThe On-Time Shipping report will show the following metrics for a selected shipping month or quarter:\nThe percentage of orders that were shipped late by country and shipping region\nCustomers that had multiple late shipments during the last quarter\nThe Auto date/time is a data load option in Power BI Desktop. The purpose of this option is to support convenient time intelligence reporting\nbased on date columns loaded into a model. Specifically, it allows report authors using your data model to filter, group, and drill down by using\ncalendar time periods (years, quarters, months, and days). What's important is that you don't need to explicitly develop these time intelligence\ncapabilities.\nWhen the option is enabled, Power BI Desktop creates a hidden auto date/time table for each date column, providing all of the following\nconditions are true:\nThe table storage mode is Import\nThe column data type is date or date/time\nThe column isn't the \"many\" side of a model relationship\nReference:",
    communityVote: "A (61%)",
    isPremium: true
  },
  {
    id: 131,
    topic: "Topic 9",
    type: "hotspot",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nGeneral Overview -\nNorthwind Traders is a specialty food import company.\nThe company recently implemented Power BI to better understand its top customers, products, and suppliers.\nBusiness Issues -\nThe sales department relies on the IT department to generate reports in Microsoft SQL Server Reporting Services (SSRS). The IT department takes\ntoo long to generate the reports and often misunderstands the report requirements.\nExisting Environment. Data Sources\nNorthwind Traders uses the data sources shown in the following table.\nSource2 is exported daily from a third-party system and stored in Microsoft SharePoint Online.\nExisting Environment. Customer Worksheet\nSource2 contains a single worksheet named Customer Details. The first 11 rows of the worksheet are shown in the following table.\nAll the fields in Source2 are mandatory.\nThe Address column in Customer Details is the billing address, which can differ from the shipping address.\nExisting Environment. Azure SQL Database\nSource1 contains the following tables:\nOrders\nProducts\nSuppliers\nCategories\nOrder Details\nSales Employees\nThe Orders table contains the following columns.\nThe Order Details table contains the following columns.\nThe address in the Orders table is the shipping address, which can differ from the billing address.\nThe Products table contains the following columns.\nThe Categories table contains the following columns.\nThe Suppliers table contains the following columns.\nThe Sales Employees table contains the following columns.\nEach employee in the Sales Employees table is assigned to one sales region. Multiple employees can be assigned to each region.\nRequirements. Report Requirements\nNorthwind Traders requires the following reports:\nTop Products\nTop Customers\nOn-Time Shipping\nThe Top Customers report will show the top 20 customers based on the highest sales amounts in a selected order month or quarter, product\ncategory, and sales region.\nThe Top Products report will show the top 20 products based on the highest sales amounts sold in a selected order month or quarter, sales region,\nand product category. The report must also show which suppliers provide the top products.\nThe On-Time Shipping report will show the following metrics for a selected shipping month or quarter:\nThe percentage of orders that were shipped late by country and shipping region\nCustomers that had multiple late shipments during the last quarter\nNorthwind Traders defines late orders as those shipped after the required shipping date.\nThe warehouse shipping department must be notified if the percentage of late orders within the current month exceeds 5%.\nThe reports must show historical data for the current calendar year and the last three calendar years.\nRequirements. Technical Requirements\nNorthwind Traders identifies the following technical requirements:\nA single dataset must support all three reports.\nThe reports must be stored in a single Power BI workspace.\nReport data must be current as of 7 AM Pacific Time each day.\nThe reports must provide fast response times when users interact with a visualization.\nThe data model must minimize the size of the dataset as much as possible, while meeting the report requirements and the technical\nrequirements.\nRequirements. Security Requirements\nAccess to the reports must be granted to Azure Active Directory (Azure AD) security groups only. An Azure AD security group exists for each\ndepartment.\nThe sales department must be able to perform the following tasks in Power BI:\nCreate, edit, and delete content in the reports.\nManage permissions for workspaces, datasets, and reports.\nPublish, unpublish, update, and change the permissions for an app.\nAssign Azure AD groups role-based access to the reports workspace.\nUsers in the sales department must be able to access only the data of the sales region to which they are assigned in the Sales Employees table.\nPower BI has the following row-level security (RLS) Table filter DAX expression for the Sales Employees table.\n[EmailAddress] = USERNAME()\nRLS will be applied only to the sales department users. Users in all other departments must be able to view all the data.\nYou need to create a relationship in the dataset for RLS.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [],
    correctAnswer: "Box 1: many-to-many -\nUsers in the sales department must be able to access only the data of the sales region to which they are assigned in the Sales Employees table.\nWith composite models, you can establish a many-to-many relationship between tables, which removes requirements for unique values in\ntables. It also removes previous workarounds, such as introducing new tables only to establish relationships.\nBox 2: Orders table -\nThe Orders table has a ShipRegion column.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: true
  },
  {
    id: 132,
    topic: "Topic 10",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that produces sports equipment. Contoso holds quarterly board meetings for which financial analysts\nmanually prepare\nMicrosoft Excel reports, including balance sheets and profit and loss statements for each of the company's four business units.\nExisting Environment -\nData and Sources -\nData for the reports comes from the sources shown in the following table.\nThe balance sheet data is unrelated to the profit and loss results other than they both relate to dates.\nBalance Sheet Data -\nThe balance sheet data is imported and includes the final monthly balances of each account in the format shown in the following table.\nThe balance sheet data always includes a row for each account for each month.\nProduct Catalog Data -\nThe product catalog shows how products roll up to product categories, which roll up to the business units. The product list is provided in the\nformat shown in the following table.\nRevenue data is provided at the date and product level. Expense data is provided at the date and department level.\nBusiness Issues -\nHistorically, it has taken two analysts a week to prepare the reports for the quarterly board meetings. Also, there is usually at least one issue each\nquarter where a value in a report is wrong because of a bad cell reference in an Excel formula. On occasion, there are conflicting results in the\nreports because the products and departments that roll up to each business unit are not defined consistently.\nRequirements -\nPlanned Changes -\nContoso plans to automate and standardize the quarterly reporting process by using Power BI. The company wants to reduce how long it takes to\npopulate the reports to less than two days. The company wants to create common logic for the business units, products, and departments. The\nlogic will be used across all reports, including but not limited to the quarterly reporting for the board.\nTechnical Requirements -\nContoso wants the reports and datasets refreshed with minimum manual effort.\nThe company wants to provide the board with a single package of reports that will contain custom navigation and links to supplementary\ninformation.\nMaintenance, including manually updating data and access, must be minimized as much as possible.\nSecurity Requirements -\nThe reports must be made available to the board from powerbi.com. An Azure Active Directory (Azure AD) group will be used to share information\nwith the board.\nContoso identifies the following security requirements for analyst access:\nAnalysts must be able to access all balance sheet and product catalog data.\nAnalysts must be able to access only the profit and loss data of their respective business unit.\nAnalysts must be able to create new reports from the dataset that contains the profit and loss data, but the reports built by the analysts must NOT\nbe included in the quarterly reports for the board.\nAnalysts must NOT be able to share the quarterly reports with anyone.\nAnalysts must NOT be able to make new reports by using the balance sheet data.\nReport Requirements -\nYou plan to relate the balance sheet table to a date table in Power BI in a many-to-one relationship based on the last day of the month. At least\none of the balance sheet reports in the quarterly reporting package must show the ending balances for the quarter, as well as for the previous\nquarter.\nThe date table will contain the columns shown in the following table.\nThe definitions and attributes for the products, departments, and business units must be consistent across all the reports.\nThe board must be able to get the following information from the quarterly reports:\nRevenue trends over time\nThe ending balances of each account\nChanges in long-term liabilities from the previous quarter\nThe percent of total revenue contributed by each product category\nA comparison of quarterly revenue versus the same quarter from the previous year\nThe reports must be updated with the latest data by 5 AM each day.\nYou need to update the Power BI model to ensure that the analysts can quickly build drill-downs from business unit to product in a visual.\nWhat should you create?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. a group",
      "B. a calculated table",
      "C. a hierarchy",
      "D. a calculated column"
    ],
    correctAnswer: "C",
    explanation: "Drill requires a hierarchy.\nWhen a visual has a hierarchy, you can drill down to reveal additional details.\nReference:",
    communityVote: "C (100%)",
    isPremium: true
  },
  {
    id: 133,
    topic: "Topic 11",
    type: "hotspot",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nGeneral Overview -\nNorthwind Traders is a specialty food import company.\nThe company recently implemented Power BI to better understand its top customers, products, and suppliers.\nBusiness Issues -\nThe sales department relies on the IT department to generate reports in Microsoft SQL Server Reporting Services (SSRS). The IT department takes\ntoo long to generate the reports and often misunderstands the report requirements.\nExisting Environment. Data Sources\nNorthwind Traders uses the data sources shown in the following table.\nSource2 is exported daily from a third-party system and stored in Microsoft SharePoint Online.\nExisting Environment. Customer Worksheet\nSource2 contains a single worksheet named Customer Details. The first 11 rows of the worksheet are shown in the following table.\nAll the fields in Source2 are mandatory.\nThe Address column in Customer Details is the billing address, which can differ from the shipping address.\nExisting Environment. Azure SQL Database\nSource1 contains the following tables:\nOrders\nProducts\nSuppliers\nCategories\nOrder Details\nSales Employees\nThe Orders table contains the following columns.\nThe Order Details table contains the following columns.\nThe address in the Orders table is the shipping address, which can differ from the billing address.\nThe Products table contains the following columns.\nThe Categories table contains the following columns.\nThe Suppliers table contains the following columns.\nThe Sales Employees table contains the following columns.\nEach employee in the Sales Employees table is assigned to one sales region. Multiple employees can be assigned to each region.\nRequirements. Report Requirements\nNorthwind Traders requires the following reports:\nTop Products\nTop Customers\nOn-Time Shipping\nThe Top Customers report will show the top 20 customers based on the highest sales amounts in a selected order month or quarter, product\ncategory, and sales region.\nThe Top Products report will show the top 20 products based on the highest sales amounts sold in a selected order month or quarter, sales region,\nand product category. The report must also show which suppliers provide the top products.\nThe On-Time Shipping report will show the following metrics for a selected shipping month or quarter:\nThe percentage of orders that were shipped late by country and shipping region\nCustomers that had multiple late shipments during the last quarter\nNorthwind Traders defines late orders as those shipped after the required shipping date.\nThe warehouse shipping department must be notified if the percentage of late orders within the current month exceeds 5%.\nThe reports must show historical data for the current calendar year and the last three calendar years.\nRequirements. Technical Requirements\nNorthwind Traders identifies the following technical requirements:\nA single dataset must support all three reports.\nThe reports must be stored in a single Power BI workspace.\nReport data must be current as of 7 AM Pacific Time each day.\nThe reports must provide fast response times when users interact with a visualization.\nThe data model must minimize the size of the dataset as much as possible, while meeting the report requirements and the technical\nrequirements.\nRequirements. Security Requirements\nAccess to the reports must be granted to Azure Active Directory (Azure AD) security groups only. An Azure AD security group exists for each\ndepartment.\nThe sales department must be able to perform the following tasks in Power BI:\nCreate, edit, and delete content in the reports.\nManage permissions for workspaces, datasets, and reports.\nPublish, unpublish, update, and change the permissions for an app.\nAssign Azure AD groups role-based access to the reports workspace.\nUsers in the sales department must be able to access only the data of the sales region to which they are assigned in the Sales Employees table.\nPower BI has the following row-level security (RLS) Table filter DAX expression for the Sales Employees table.\n[EmailAddress] = USERNAME()\nRLS will be applied only to the sales department users. Users in all other departments must be able to view all the data.\nYou need to create the Top Customers report.\nWhich type of filter should you use, and at which level should you apply the filter? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [],
    correctAnswer: "Box 1: Top N -\nThe Top Customers report will show the top 20 customers based on the highest sales amounts in a selected order month or quarter, product\ncategory, and sales region.\nBox 2: Visual -\nThe reports must show historical data for the current calendar year and the last three calendar years.\nApplying specific measures to the visual-level filter of a visualization is a very powerful technique to completely customize the items shown in a\nreport. The presence of this filter requires special measures in order to display values related to items not included in the visual level filter.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: true
  },
  {
    id: 134,
    topic: "Topic 11",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nGeneral Overview -\nNorthwind Traders is a specialty food import company.\nThe company recently implemented Power BI to better understand its top customers, products, and suppliers.\nBusiness Issues -\nThe sales department relies on the IT department to generate reports in Microsoft SQL Server Reporting Services (SSRS). The IT department takes\ntoo long to generate the reports and often misunderstands the report requirements.\nExisting Environment. Data Sources\nNorthwind Traders uses the data sources shown in the following table.\nSource2 is exported daily from a third-party system and stored in Microsoft SharePoint Online.\nExisting Environment. Customer Worksheet\nSource2 contains a single worksheet named Customer Details. The first 11 rows of the worksheet are shown in the following table.\nAll the fields in Source2 are mandatory.\nThe Address column in Customer Details is the billing address, which can differ from the shipping address.\nExisting Environment. Azure SQL Database\nSource1 contains the following tables:\nOrders\nProducts\nSuppliers\nCategories\nOrder Details\nSales Employees\nThe Orders table contains the following columns.\nThe Order Details table contains the following columns.\nThe address in the Orders table is the shipping address, which can differ from the billing address.\nThe Products table contains the following columns.\nThe Categories table contains the following columns.\nThe Suppliers table contains the following columns.\nThe Sales Employees table contains the following columns.\nEach employee in the Sales Employees table is assigned to one sales region. Multiple employees can be assigned to each region.\nRequirements. Report Requirements\nNorthwind Traders requires the following reports:\nTop Products\nTop Customers\nOn-Time Shipping\nThe Top Customers report will show the top 20 customers based on the highest sales amounts in a selected order month or quarter, product\ncategory, and sales region.\nThe Top Products report will show the top 20 products based on the highest sales amounts sold in a selected order month or quarter, sales region,\nand product category. The report must also show which suppliers provide the top products.\nThe On-Time Shipping report will show the following metrics for a selected shipping month or quarter:\nThe percentage of orders that were shipped late by country and shipping region\nCustomers that had multiple late shipments during the last quarter\nNorthwind Traders defines late orders as those shipped after the required shipping date.\nThe warehouse shipping department must be notified if the percentage of late orders within the current month exceeds 5%.\nThe reports must show historical data for the current calendar year and the last three calendar years.\nRequirements. Technical Requirements\nNorthwind Traders identifies the following technical requirements:\nA single dataset must support all three reports.\nThe reports must be stored in a single Power BI workspace.\nReport data must be current as of 7 AM Pacific Time each day.\nThe reports must provide fast response times when users interact with a visualization.\nThe data model must minimize the size of the dataset as much as possible, while meeting the report requirements and the technical\nrequirements.\nRequirements. Security Requirements\nAccess to the reports must be granted to Azure Active Directory (Azure AD) security groups only. An Azure AD security group exists for each\ndepartment.\nThe sales department must be able to perform the following tasks in Power BI:\nCreate, edit, and delete content in the reports.\nManage permissions for workspaces, datasets, and reports.\nPublish, unpublish, update, and change the permissions for an app.\nAssign Azure AD groups role-based access to the reports workspace.\nUsers in the sales department must be able to access only the data of the sales region to which they are assigned in the Sales Employees table.\nPower BI has the following row-level security (RLS) Table filter DAX expression for the Sales Employees table.\n[EmailAddress] = USERNAME()\nRLS will be applied only to the sales department users. Users in all other departments must be able to view all the data.\nYou need to create the On-Time Shipping report. The report must include a visualization that shows the percentage of late orders.\nWhich type of visualization should you create?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. pie chart",
      "B. scatterplot",
      "C. bar chart"
    ],
    correctAnswer: "C",
    explanation: "The On-Time Shipping report will show the following metrics for a selected shipping month or quarter:\nThe percentage of orders that were shipped late by country and shipping region\nBar and column charts are some of the most widely used visualization charts in Power BI. They can be used for one or multiple categories. Both\nthese chart types represent data with rectangular bars, where the size of the bar is proportional to the magnitude of data values.\nReference:",
    communityVote: "A (67%)",
    isPremium: true
  },
  {
    id: 135,
    topic: "Topic 12",
    type: "hotspot",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an online retailer that uses Power BI.\nLitware plans to leverage data from an Azure SQL database that stores data for the company's live e-commerce website.\nLitware uses Azure Active Directory (Azure AD) to authenticate users.\nExisting Environment. Sales Data\nLitware has online sales data that has the SQL schema shown in the following table.\nIn the Date table, the date_id column has a format of yyyymmdd and the month column has a format of yyyymm.\nThe week column in the Date table and the week_id column in the Weekly_Returns table have a format of yyyyww.\nIn the Sales table, the sales_id column represents a unique transaction.\nThe region id column can be managed by only one sales manager.\nExisting Environment. Data Concerns\nYou are concerned with the quality and completeness of the sales data. You must ensure that negative and missing sales_amount values do NOT\ncontribute to the total sales amount calculation.\nExisting Environment. Reporting Requirements\nLitware identifies the following reporting requirements:\nExecutives require a visual that shows sales by region.\nExecutives require a visual that shows returns by region manager and the sales managers that report to them.\nThe sales managers must be able to see only the sales data of their respective region.\nThe sales managers require a visual to analyze sales performance versus sales targets.\nThe sales department requires reports that contain the number of sales transactions.\nUsers must be able to see the month in each report as shown in the following example: Feb 2020.\nThe customer service department requires a visual that can be filtered by both sales month and ship month independently.\nThe maximum allowed latency to include transactions in reports is five minutes.\nYou need to create a KPI visualization to meet the reporting requirements of the sales managers.\nHow should you create the visualization? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [],
    correctAnswer: "The sales managers require a visual to analyze sales performance versus sales targets.\nBox 1: Sales[sales_amount]\nValue; The main measure which we want to evaluate\nExample:\nSales = sum(FactInternetSales[SalesAmount])\nBox 2: Date[month]\nTrend; How Value perfoms in a time period, is it going upward, downward...?\nYou can use Months as trend axis.\nBox 3: Targets[sales_target]\nTarget; What we want to compare the Value with",
    explanation: "Reference:",
    communityVote: null,
    isPremium: true
  },
  {
    id: 136,
    topic: "Topic 13",
    type: "hotspot",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an online retailer that uses Power BI.\nLitware plans to leverage data from an Azure SQL database that stores data for the company's live e-commerce website.\nLitware uses Azure Active Directory (Azure AD) to authenticate users.\nExisting Environment. Sales Data\nLitware has online sales data that has the SQL schema shown in the following table.\nIn the Date table, the date_id column has a format of yyyymmdd and the month column has a format of yyyymm.\nThe week column in the Date table and the week_id column in the Weekly_Returns table have a format of yyyyww.\nIn the Sales table, the sales_id column represents a unique transaction.\nThe region id column can be managed by only one sales manager.\nExisting Environment. Data Concerns\nYou are concerned with the quality and completeness of the sales data. You must ensure that negative and missing sales_amount values do NOT\ncontribute to the total sales amount calculation.\nExisting Environment. Reporting Requirements\nLitware identifies the following reporting requirements:\nExecutives require a visual that shows sales by region.\nExecutives require a visual that shows returns by region manager and the sales managers that report to them.\nThe sales managers must be able to see only the sales data of their respective region.\nThe sales managers require a visual to analyze sales performance versus sales targets.\nThe sales department requires reports that contain the number of sales transactions.\nUsers must be able to see the month in each report as shown in the following example: Feb 2020.\nThe customer service department requires a visual that can be filtered by both sales month and ship month independently.\nThe maximum allowed latency to include transactions in reports is five minutes.\nYou publish the dataset to powerbi.com.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [],
    correctAnswer: "",
    explanation: "",
    communityVote: null,
    isPremium: true
  },
  {
    id: 137,
    topic: "Topic 13",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an online retailer that uses Power BI.\nLitware plans to leverage data from an Azure SQL database that stores data for the company's live e-commerce website.\nLitware uses Azure Active Directory (Azure AD) to authenticate users.\nExisting Environment. Sales Data\nLitware has online sales data that has the SQL schema shown in the following table.\nIn the Date table, the date_id column has a format of yyyymmdd and the month column has a format of yyyymm.\nThe week column in the Date table and the week_id column in the Weekly_Returns table have a format of yyyyww.\nIn the Sales table, the sales_id column represents a unique transaction.\nThe region id column can be managed by only one sales manager.\nExisting Environment. Data Concerns\nYou are concerned with the quality and completeness of the sales data. You must ensure that negative and missing sales_amount values do NOT\ncontribute to the total sales amount calculation.\nExisting Environment. Reporting Requirements\nLitware identifies the following reporting requirements:\nExecutives require a visual that shows sales by region.\nExecutives require a visual that shows returns by region manager and the sales managers that report to them.\nThe sales managers must be able to see only the sales data of their respective region.\nThe sales managers require a visual to analyze sales performance versus sales targets.\nThe sales department requires reports that contain the number of sales transactions.\nUsers must be able to see the month in each report as shown in the following example: Feb 2020.\nThe customer service department requires a visual that can be filtered by both sales month and ship month independently.\nThe maximum allowed latency to include transactions in reports is five minutes.\nWhat should you create to meet the reporting requirements of the sales department?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. a measure column that uses the following formula: SUMX(FILTER('Sales', 'Sales'[sales_amount] > 0)),[sales_amount])",
      "B. a calculated column that uses the following formula: ABS(Sales[sales_amount])",
      "C. a calculated column that uses the following formula: IF(ISBLANK(Sales[sales_amount]),0, (Sales[sales_amount]))",
      "D. a measure that uses the following formula: SUM(Sales[sales_amount])"
    ],
    correctAnswer: "A",
    explanation: "",
    communityVote: null,
    isPremium: true
  },
  {
    id: 138,
    topic: "Topic 14",
    type: "hotspot",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that produces sports equipment. Contoso holds quarterly board meetings for which financial analysts\nmanually prepare\nMicrosoft Excel reports, including balance sheets and profit and loss statements for each of the company's four business units.\nExisting Environment -\nData and Sources -\nData for the reports comes from the sources shown in the following table.\nThe balance sheet data is unrelated to the profit and loss results other than they both relate to dates.\nBalance Sheet Data -\nThe balance sheet data is imported and includes the final monthly balances of each account in the format shown in the following table.\nThe balance sheet data always includes a row for each account for each month.\nProduct Catalog Data -\nThe product catalog shows how products roll up to product categories, which roll up to the business units. The product list is provided in the\nformat shown in the following table.\nRevenue data is provided at the date and product level. Expense data is provided at the date and department level.\nBusiness Issues -\nHistorically, it has taken two analysts a week to prepare the reports for the quarterly board meetings. Also, there is usually at least one issue each\nquarter where a value in a report is wrong because of a bad cell reference in an Excel formula. On occasion, there are conflicting results in the\nreports because the products and departments that roll up to each business unit are not defined consistently.\nRequirements -\nPlanned Changes -\nContoso plans to automate and standardize the quarterly reporting process by using Power BI. The company wants to reduce how long it takes to\npopulate the reports to less than two days. The company wants to create common logic for the business units, products, and departments. The\nlogic will be used across all reports, including but not limited to the quarterly reporting for the board.\nTechnical Requirements -\nContoso wants the reports and datasets refreshed with minimum manual effort.\nThe company wants to provide the board with a single package of reports that will contain custom navigation and links to supplementary\ninformation.\nMaintenance, including manually updating data and access, must be minimized as much as possible.\nSecurity Requirements -\nThe reports must be made available to the board from powerbi.com. An Azure Active Directory (Azure AD) group will be used to share information\nwith the board.\nContoso identifies the following security requirements for analyst access:\nAnalysts must be able to access all balance sheet and product catalog data.\nAnalysts must be able to access only the profit and loss data of their respective business unit.\nAnalysts must be able to create new reports from the dataset that contains the profit and loss data, but the reports built by the analysts must NOT\nbe included in the quarterly reports for the board.\nAnalysts must NOT be able to share the quarterly reports with anyone.\nAnalysts must NOT be able to make new reports by using the balance sheet data.\nReport Requirements -\nYou plan to relate the balance sheet table to a date table in Power BI in a many-to-one relationship based on the last day of the month. At least\none of the balance sheet reports in the quarterly reporting package must show the ending balances for the quarter, as well as for the previous\nquarter.\nThe date table will contain the columns shown in the following table.\nThe definitions and attributes for the products, departments, and business units must be consistent across all the reports.\nThe board must be able to get the following information from the quarterly reports:\nRevenue trends over time\nThe ending balances of each account\nChanges in long-term liabilities from the previous quarter\nThe percent of total revenue contributed by each product category\nA comparison of quarterly revenue versus the same quarter from the previous year\nThe reports must be updated with the latest data by 5 AM each day.\nYou need to grant access to the business unit analysts.\nWhat should you configure? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [],
    correctAnswer: "Box 1: App permissions -\nApp permissions.\nThis section describes the kinds of permissions you can grant to the specified users\n* Allow all users to connect to the app's underlying datasets using the Build permission\nThis option grants build permission on the app's underlying datasets.\n* Etc.\nNote: Contoso identifies the following security requirements for analyst access:\n✑ Analysts must be able to access all balance sheet and product catalog data.\n✑ Analysts must be able to access only the profit and loss data of their respective business unit.\n✑ Analysts must be able to create new reports from the dataset that contains the profit and loss data, but the reports built by the analysts\nmust NOT be included in the quarterly reports for the board.\n✑ Analysts must NOT be able to share the quarterly reports with anyone.\n✑ Analysts must NOT be able to make new reports by using the balance sheet data.\nIncorrect:\nNot Member role: Would grant too much permissions.\nNot Viewer role: Need more granular permissions.\nBox 2: Reshare -\nApp permissions,\nThis section describes the kinds of permissions you can grant to the specified users\n* Allow users to share the app and the app's underlying datasets using the share permission\nThis option grants users reshare permission on the app's underlying datasets.\n* Etc.\nNote: Analysts must be able to create new reports from the dataset that contains the profit and loss data, but the reports built by the analysts\nmust NOT be included in the quarterly reports for the board.",
    explanation: "Reference:",
    communityVote: null,
    isPremium: true
  },
  {
    id: 139,
    topic: "Topic 14",
    type: "hotspot",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that produces sports equipment. Contoso holds quarterly board meetings for which financial analysts\nmanually prepare\nMicrosoft Excel reports, including balance sheets and profit and loss statements for each of the company's four business units.\nExisting Environment -\nData and Sources -\nData for the reports comes from the sources shown in the following table.\nThe balance sheet data is unrelated to the profit and loss results other than they both relate to dates.\nBalance Sheet Data -\nThe balance sheet data is imported and includes the final monthly balances of each account in the format shown in the following table.\nThe balance sheet data always includes a row for each account for each month.\nProduct Catalog Data -\nThe product catalog shows how products roll up to product categories, which roll up to the business units. The product list is provided in the\nformat shown in the following table.\nRevenue data is provided at the date and product level. Expense data is provided at the date and department level.\nBusiness Issues -\nHistorically, it has taken two analysts a week to prepare the reports for the quarterly board meetings. Also, there is usually at least one issue each\nquarter where a value in a report is wrong because of a bad cell reference in an Excel formula. On occasion, there are conflicting results in the\nreports because the products and departments that roll up to each business unit are not defined consistently.\nRequirements -\nPlanned Changes -\nContoso plans to automate and standardize the quarterly reporting process by using Power BI. The company wants to reduce how long it takes to\npopulate the reports to less than two days. The company wants to create common logic for the business units, products, and departments. The\nlogic will be used across all reports, including but not limited to the quarterly reporting for the board.\nTechnical Requirements -\nContoso wants the reports and datasets refreshed with minimum manual effort.\nThe company wants to provide the board with a single package of reports that will contain custom navigation and links to supplementary\ninformation.\nMaintenance, including manually updating data and access, must be minimized as much as possible.\nSecurity Requirements -\nThe reports must be made available to the board from powerbi.com. An Azure Active Directory (Azure AD) group will be used to share information\nwith the board.\nContoso identifies the following security requirements for analyst access:\nAnalysts must be able to access all balance sheet and product catalog data.\nAnalysts must be able to access only the profit and loss data of their respective business unit.\nAnalysts must be able to create new reports from the dataset that contains the profit and loss data, but the reports built by the analysts must NOT\nbe included in the quarterly reports for the board.\nAnalysts must NOT be able to share the quarterly reports with anyone.\nAnalysts must NOT be able to make new reports by using the balance sheet data.\nReport Requirements -\nYou plan to relate the balance sheet table to a date table in Power BI in a many-to-one relationship based on the last day of the month. At least\none of the balance sheet reports in the quarterly reporting package must show the ending balances for the quarter, as well as for the previous\nquarter.\nThe date table will contain the columns shown in the following table.\nThe definitions and attributes for the products, departments, and business units must be consistent across all the reports.\nThe board must be able to get the following information from the quarterly reports:\nRevenue trends over time\nThe ending balances of each account\nChanges in long-term liabilities from the previous quarter\nThe percent of total revenue contributed by each product category\nA comparison of quarterly revenue versus the same quarter from the previous year\nThe reports must be updated with the latest data by 5 AM each day.\nHow should you distribute the reports to the board? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [],
    correctAnswer: "Box 1: Using a workspace membership\nNote 1: The company wants to provide the board with a single package of reports that will contain custom navigation and links to\nsupplementary information.\nSharing is the easiest way to give people access to your reports and dashboards in the Power BI service. You can share with people inside or\noutside your organization. \nWhere you can share:\nYou can share reports and dashboards from My Workspace.\nYou can share from workspaces other than My Workspace, if you have the Admin or Member role in the workspace. If you have the Contributor\nor Viewer role, you can share if you have Reshare permissions.\nYou can share from the Power BI mobile apps.\nYou can't share directly from Power BI Desktop.\nBox 2: A mail-enabled security group in Azure Active Directory\nMail-Enabled Security Group -\nThis group also contains a list of email addresses of members and can also be used to control access to OneDrive and SharePoint.\nThe Mail-Enabled Security Group can be created in the Office 365 Admin Portal\nNote: The reports must be made available to the board from powerbi.com. An Azure Active Directory (Azure AD) group will be used to share\ninformation with the board.\nIncorrect:\n* Distribution Group\nThis group can also be called and Distribution List. The Distribution Group is a group which contains a list of email addresses of members, all\nof whom will be sent an email when an email is sent to the distribution groups email address.\nThe Distribution Group can be created in the Azure Active Directory",
    explanation: "Reference:\nwhich-groups-can-be-used-to-set-permissions-in-power-bi/",
    communityVote: null,
    isPremium: true
  },
  {
    id: 140,
    topic: "Topic 14",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that produces sports equipment. Contoso holds quarterly board meetings for which financial analysts\nmanually prepare\nMicrosoft Excel reports, including balance sheets and profit and loss statements for each of the company's four business units.\nExisting Environment -\nData and Sources -\nData for the reports comes from the sources shown in the following table.\nThe balance sheet data is unrelated to the profit and loss results other than they both relate to dates.\nBalance Sheet Data -\nThe balance sheet data is imported and includes the final monthly balances of each account in the format shown in the following table.\nThe balance sheet data always includes a row for each account for each month.\nProduct Catalog Data -\nThe product catalog shows how products roll up to product categories, which roll up to the business units. The product list is provided in the\nformat shown in the following table.\nRevenue data is provided at the date and product level. Expense data is provided at the date and department level.\nBusiness Issues -\nHistorically, it has taken two analysts a week to prepare the reports for the quarterly board meetings. Also, there is usually at least one issue each\nquarter where a value in a report is wrong because of a bad cell reference in an Excel formula. On occasion, there are conflicting results in the\nreports because the products and departments that roll up to each business unit are not defined consistently.\nRequirements -\nPlanned Changes -\nContoso plans to automate and standardize the quarterly reporting process by using Power BI. The company wants to reduce how long it takes to\npopulate the reports to less than two days. The company wants to create common logic for the business units, products, and departments. The\nlogic will be used across all reports, including but not limited to the quarterly reporting for the board.\nTechnical Requirements -\nContoso wants the reports and datasets refreshed with minimum manual effort.\nThe company wants to provide the board with a single package of reports that will contain custom navigation and links to supplementary\ninformation.\nMaintenance, including manually updating data and access, must be minimized as much as possible.\nSecurity Requirements -\nThe reports must be made available to the board from powerbi.com. An Azure Active Directory (Azure AD) group will be used to share information\nwith the board.\nContoso identifies the following security requirements for analyst access:\nAnalysts must be able to access all balance sheet and product catalog data.\nAnalysts must be able to access only the profit and loss data of their respective business unit.\nAnalysts must be able to create new reports from the dataset that contains the profit and loss data, but the reports built by the analysts must NOT\nbe included in the quarterly reports for the board.\nAnalysts must NOT be able to share the quarterly reports with anyone.\nAnalysts must NOT be able to make new reports by using the balance sheet data.\nReport Requirements -\nYou plan to relate the balance sheet table to a date table in Power BI in a many-to-one relationship based on the last day of the month. At least\none of the balance sheet reports in the quarterly reporting package must show the ending balances for the quarter, as well as for the previous\nquarter.\nThe date table will contain the columns shown in the following table.\nThe definitions and attributes for the products, departments, and business units must be consistent across all the reports.\nThe board must be able to get the following information from the quarterly reports:\nRevenue trends over time\nThe ending balances of each account\nChanges in long-term liabilities from the previous quarter\nThe percent of total revenue contributed by each product category\nA comparison of quarterly revenue versus the same quarter from the previous year\nThe reports must be updated with the latest data by 5 AM each day.\nYou need to ensure that the data is updated to meet the report requirements. The solution must minimize configuration effort.\nWhat should you do?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. From each report in powerbi.com, select Refresh visuals.",
      "B. From Power BI Desktop, download the PBIX file and refresh the data.",
      "C. Configure a scheduled refresh without using an on-premises data gateway.",
      "D. Configure a scheduled refresh by using an on-premises data gateway."
    ],
    correctAnswer: "D",
    explanation: "The reports must be updated with the latest data by 5 AM each day.\nYou have options available with the scheduled refresh for the On-premises data gateway (personal mode) and the On-premises data gateway.\nReference:",
    communityVote: "C (100%)",
    isPremium: true
  },
  {
    id: 141,
    topic: "Topic 14",
    type: "mcq",
    question: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment and problem\nstatements. If the case study has an\nAll Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to\nanswer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that produces sports equipment. Contoso holds quarterly board meetings for which financial analysts\nmanually prepare\nMicrosoft Excel reports, including balance sheets and profit and loss statements for each of the company's four business units.\nExisting Environment -\nData and Sources -\nData for the reports comes from the sources shown in the following table.\nThe balance sheet data is unrelated to the profit and loss results other than they both relate to dates.\nBalance Sheet Data -\nThe balance sheet data is imported and includes the final monthly balances of each account in the format shown in the following table.\nThe balance sheet data always includes a row for each account for each month.\nProduct Catalog Data -\nThe product catalog shows how products roll up to product categories, which roll up to the business units. The product list is provided in the\nformat shown in the following table.\nRevenue data is provided at the date and product level. Expense data is provided at the date and department level.\nBusiness Issues -\nHistorically, it has taken two analysts a week to prepare the reports for the quarterly board meetings. Also, there is usually at least one issue each\nquarter where a value in a report is wrong because of a bad cell reference in an Excel formula. On occasion, there are conflicting results in the\nreports because the products and departments that roll up to each business unit are not defined consistently.\nRequirements -\nPlanned Changes -\nContoso plans to automate and standardize the quarterly reporting process by using Power BI. The company wants to reduce how long it takes to\npopulate the reports to less than two days. The company wants to create common logic for the business units, products, and departments. The\nlogic will be used across all reports, including but not limited to the quarterly reporting for the board.\nTechnical Requirements -\nContoso wants the reports and datasets refreshed with minimum manual effort.\nThe company wants to provide the board with a single package of reports that will contain custom navigation and links to supplementary\ninformation.\nMaintenance, including manually updating data and access, must be minimized as much as possible.\nSecurity Requirements -\nThe reports must be made available to the board from powerbi.com. An Azure Active Directory (Azure AD) group will be used to share information\nwith the board.\nContoso identifies the following security requirements for analyst access:\nAnalysts must be able to access all balance sheet and product catalog data.\nAnalysts must be able to access only the profit and loss data of their respective business unit.\nAnalysts must be able to create new reports from the dataset that contains the profit and loss data, but the reports built by the analysts must NOT\nbe included in the quarterly reports for the board.\nAnalysts must NOT be able to share the quarterly reports with anyone.\nAnalysts must NOT be able to make new reports by using the balance sheet data.\nReport Requirements -\nYou plan to relate the balance sheet table to a date table in Power BI in a many-to-one relationship based on the last day of the month. At least\none of the balance sheet reports in the quarterly reporting package must show the ending balances for the quarter, as well as for the previous\nquarter.\nThe date table will contain the columns shown in the following table.\nThe definitions and attributes for the products, departments, and business units must be consistent across all the reports.\nThe board must be able to get the following information from the quarterly reports:\nRevenue trends over time\nThe ending balances of each account\nChanges in long-term liabilities from the previous quarter\nThe percent of total revenue contributed by each product category\nA comparison of quarterly revenue versus the same quarter from the previous year\nThe reports must be updated with the latest data by 5 AM each day.\nWhat is the minimum number of Power BI datasets needed to support the reports?\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]",
    options: [
      "A. a single imported dataset",
      "B. two imported datasets",
      "C. two DirectQuery datasets",
      "D. a single DirectQuery dataset"
    ],
    correctAnswer: "B",
    explanation: "Note:\nAnalysts must be able to create new reports from the dataset that contains the profit and loss data, but the reports built by the analysts must\nNOT be included in the quarterly reports for the board.\nAnalysts must NOT be able to make new reports by using the balance sheet data.\nTwo datasets are required.\nNeed DAX for: A comparison of quarterly revenue versus the same quarter from the previous year. Also see other questions in this Case study\nwhich uses DAX expressions.\nIncorrect:\nNot DirectQuery: DirectQuery Limited Transformations.\nYou are not able to use all of the normal Power Query transformation features. Particular DAX functions are not available in this method as well.\nSo if your data is poorly structured or needing lots of transformation, sometimes Direct Query is not a viable option.\nReference:",
    communityVote: "A (63%)",
    isPremium: true
  }
];

if (typeof module !== 'undefined') module.exports = pl300Questions;
