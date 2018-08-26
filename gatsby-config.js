module.exports = {
  siteMetadata: {
    title: 'Gatsby Powered Wordpress site',
    subtitle: 'Fetch data from wp local install',
  },
  
  plugins: [

		'gatsby-plugin-react-helmet',
		
		{
			resolve: "gatsby-source-wordpress",
	    		options: {

	    			baseUrl: "subhost.localhost",
					protocol: "http",
					hostingWPCOM: false,
					useACF: true,
					verboseOutput: true
	    		}
		}

	],
}
