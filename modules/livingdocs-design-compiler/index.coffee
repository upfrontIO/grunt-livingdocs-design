path = require 'path'
file = require './file'
helpers = require './helpers'
exports.model = Design = require './models/design'

# options
#   src, directory of design
#   dest, destination of design.js file
#   templatesDirectory, default: "templates",
#   configurationElement, default: "script[ld-conf]"
#   minify, default: true
#   minifyOptions:
#     collapseWhitespace: true
#     removeComments: true
#     removeCommentsFromCDATA: true
#     removeCDATASectionsFromCDATA: true

exports.compile = (options) ->
    #log.error 'The Design directory #{dir} does not exist' unless fs.exists dir

    design = new Design(options)

    # Add design configuration file (with global settings)
    design.initConfigFile(path.join(options.src, 'config.json'), options.src)

    #
    # Find all groups and templates
    #
    templateGroups = []
    templateFiles = []
    templatesPath = path.join(options.src, options.templatesDirectory)
    resources = file.readdir(templatesPath, design)
    for resource in resources
      resourcePath = path.join(templatesPath, resource)

      # add root templates
      templateFiles.push resourcePath

      # add group if it's a directory
      if file.isDirectory(resourcePath)
        templateGroups.push(resourcePath)

        # add templates of a group
        templates = file.readdir(resourcePath, design)
        for template in templates
          templatePath = path.join(resourcePath, template)
          templateFiles.push templatePath

    unless templateFiles.length
      design.emit 'warn', "The design \"#{options.design}\" has no templates"

    # Add groups to design
    for group in templateGroups
      design.addGroupFile(group)

    # Add templates to design
    for template in templateFiles
      if /\.html$/.test(template)
        design.addTemplateFile(template, options)


    # Add kickstarters
    kickstartersPath = path.join(options.src, 'kickstarters')
    kickstarters = file.readdir(kickstartersPath, design)
    
    if kickstarters.length == 0
      design.emit 'debug', "The design \"options.design\" has no Kickstarters."
    
    for kickstarter in kickstarters
      if /\.html$/.test(kickstarter)
        design.addKickstartFile(kickstartersPath + '/' + kickstarter, options)


    design.save(options.dest + '/design.js', options.minify)

    design
