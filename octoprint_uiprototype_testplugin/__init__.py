import octoprint.plugin


class UiPrototypeTestPlugin(octoprint.plugin.AssetPlugin):
    def get_modules(self, *args, **kwargs):
        return {
            "octoprint_uiprototype_testplugin": "pluginstatic://octoprint_uiprototype_testplugin.js"
        }


__plugin_pythoncompat__ = ">=3,<4"  # Only Python 3
__plugin_implementation__ = UiPrototypeTestPlugin()
__plugin_hooks__ = {
    "octoprint.plugin.uiprototype.gather_modules": __plugin_implementation__.get_modules
}
