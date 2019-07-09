var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./DataSetGrid/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./DataSetGrid/index.ts":
/*!******************************!*\
  !*** ./DataSetGrid/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n}); // Define const here\n\nvar RowRecordId = \"rowRecId\"; // Style name of Load More Button\n\nvar DataSetControl_LoadMoreButton_Hidden_Style = \"DataSetControl_LoadMoreButton_Hidden_Style\";\n\nvar TSDataSetGrid =\n/** @class */\nfunction () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function TSDataSetGrid() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n\n\n  TSDataSetGrid.prototype.init = function (context, notifyOutputChanged, state, container) {\n    // Need to track container resize so that control could get the available width. The available height won't be provided even this is true\n    context.mode.trackContainerResize(true); // Create main table container div. \n\n    this.mainContainer = document.createElement(\"div\"); // Create data table container div. \n\n    this.gridContainer = document.createElement(\"div\");\n    this.gridContainer.classList.add(\"DataSetControl_grid-container\"); // Create data table container div. \n\n    this.loadPageButton = document.createElement(\"button\");\n    this.loadPageButton.setAttribute(\"type\", \"button\");\n    this.loadPageButton.innerText = context.resources.getString(\"PCF_DataSetControl_LoadMore_ButtonLabel\");\n    this.loadPageButton.classList.add(DataSetControl_LoadMoreButton_Hidden_Style);\n    this.loadPageButton.classList.add(\"DataSetControl_LoadMoreButton_Style\");\n    this.loadPageButton.addEventListener(\"click\", this.onLoadMoreButtonClick.bind(this)); // Adding the main table and loadNextPage button created to the container DIV.\n\n    this.mainContainer.appendChild(this.gridContainer);\n    this.mainContainer.appendChild(this.loadPageButton);\n    this.mainContainer.classList.add(\"DataSetControl_main-container\");\n    container.appendChild(this.mainContainer);\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  TSDataSetGrid.prototype.updateView = function (context) {\n    this.contextObj = context;\n    this.toggleLoadMoreButtonWhenNeeded(context.parameters.dataSetGrid);\n\n    if (!context.parameters.dataSetGrid.loading) {\n      // Get sorted columns on View\n      var columnsOnView = this.getSortedColumnsOnView(context);\n\n      if (!columnsOnView || columnsOnView.length === 0) {\n        return;\n      }\n\n      while (this.gridContainer.firstChild) {\n        this.gridContainer.removeChild(this.gridContainer.firstChild);\n      }\n\n      this.gridContainer.appendChild(this.createGridBody(columnsOnView, context.parameters.dataSetGrid));\n    } // this is needed to ensure the scroll bar appears automatically when the grid resize happens and all the tiles are not visible on the screen.\n\n\n    this.mainContainer.style.maxHeight = window.innerHeight - this.gridContainer.offsetTop - 75 + \"px\";\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  TSDataSetGrid.prototype.getOutputs = function () {\n    return {};\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  TSDataSetGrid.prototype.destroy = function () {};\n  /**\r\n   * Get sorted columns on view\r\n   * @param context\r\n   * @return sorted columns object on View\r\n   */\n\n\n  TSDataSetGrid.prototype.getSortedColumnsOnView = function (context) {\n    if (!context.parameters.dataSetGrid.columns) {\n      return [];\n    }\n\n    var columns = context.parameters.dataSetGrid.columns.filter(function (columnItem) {\n      // some column are supplementary and their order is not > 0\n      return columnItem.order >= 0;\n    }); // Sort those columns so that they will be rendered in order\n\n    columns.sort(function (a, b) {\n      return a.order - b.order;\n    });\n    return columns;\n  };\n  /**\r\n   * funtion that creates the body of the grid and embeds the content onto the tiles.\r\n   * @param columnsOnView columns on the view whose value needs to be shown on the UI\r\n   * @param gridParam data of the Grid\r\n   */\n\n\n  TSDataSetGrid.prototype.createGridBody = function (columnsOnView, gridParam) {\n    var gridBody = document.createElement(\"div\");\n\n    if (gridParam.sortedRecordIds.length > 0) {\n      var _loop_1 = function _loop_1(currentRecordId) {\n        var gridRecord = document.createElement(\"div\");\n        gridRecord.classList.add(\"DataSetControl_grid-item\");\n        gridRecord.addEventListener(\"click\", this_1.onRowClick.bind(this_1)); // Set the recordId on the row dom\n\n        gridRecord.setAttribute(RowRecordId, gridParam.records[currentRecordId].getRecordId());\n        columnsOnView.forEach(function (columnItem, index) {\n          var labelPara = document.createElement(\"p\");\n          labelPara.classList.add(\"DataSetControl_grid-text-label\");\n          labelPara.nodeValue = \"Name\"; // Added this\n\n          var valuePara = document.createElement(\"p\");\n          valuePara.classList.add(\"DataSetControl_grid-text-value\");\n          labelPara.textContent = columnItem.displayName + \" : \";\n          gridRecord.appendChild(labelPara);\n\n          if (gridParam.records[currentRecordId].getFormattedValue(columnItem.name) != null && gridParam.records[currentRecordId].getFormattedValue(columnItem.name) != \"\") {\n            valuePara.textContent = gridParam.records[currentRecordId].getFormattedValue(columnItem.name);\n            gridRecord.appendChild(valuePara);\n          } else {\n            valuePara.textContent = \"-\";\n            gridRecord.appendChild(valuePara);\n          }\n        });\n        gridBody.appendChild(gridRecord);\n      };\n\n      var this_1 = this;\n\n      for (var _i = 0, _a = gridParam.sortedRecordIds; _i < _a.length; _i++) {\n        var currentRecordId = _a[_i];\n\n        _loop_1(currentRecordId);\n      }\n    } else {\n      var noRecordLabel = document.createElement(\"div\");\n      noRecordLabel.classList.add(\"DataSetControl_grid-norecords\");\n      noRecordLabel.style.width = this.contextObj.mode.allocatedWidth - 25 + \"px\";\n      noRecordLabel.innerHTML = this.contextObj.resources.getString(\"PCF_DataSetControl_No_Record_Found\");\n      gridBody.appendChild(noRecordLabel);\n    }\n\n    return gridBody;\n  };\n  /**\r\n   * Row Click Event handler for the associated row when being clicked\r\n   * @param event\r\n   */\n\n\n  TSDataSetGrid.prototype.onRowClick = function (event) {\n    var rowRecordId = event.currentTarget.getAttribute(RowRecordId);\n\n    if (rowRecordId) {\n      var entityReference = this.contextObj.parameters.dataSetGrid.records[rowRecordId].getNamedReference();\n      var entityFormOptions = {\n        entityName: entityReference.name,\n        entityId: entityReference.id\n      };\n      this.contextObj.navigation.openForm(entityFormOptions);\n    }\n  };\n  /**\r\n   * Toggle 'LoadMore' button when needed\r\n   */\n\n\n  TSDataSetGrid.prototype.toggleLoadMoreButtonWhenNeeded = function (gridParam) {\n    if (gridParam.paging.hasNextPage && this.loadPageButton.classList.contains(DataSetControl_LoadMoreButton_Hidden_Style)) {\n      this.loadPageButton.classList.remove(DataSetControl_LoadMoreButton_Hidden_Style);\n    } else if (!gridParam.paging.hasNextPage && !this.loadPageButton.classList.contains(DataSetControl_LoadMoreButton_Hidden_Style)) {\n      this.loadPageButton.classList.add(DataSetControl_LoadMoreButton_Hidden_Style);\n    }\n  };\n  /**\r\n   * 'LoadMore' Button Event handler when load more button clicks\r\n   * @param event\r\n   */\n\n\n  TSDataSetGrid.prototype.onLoadMoreButtonClick = function (event) {\n    this.contextObj.parameters.dataSetGrid.paging.loadNextPage();\n    this.toggleLoadMoreButtonWhenNeeded(this.contextObj.parameters.dataSetGrid);\n  };\n\n  return TSDataSetGrid;\n}();\n\nexports.TSDataSetGrid = TSDataSetGrid;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./DataSetGrid/index.ts?");

/***/ })

/******/ });
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('DataSetGrid.TSDataSetGrid', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.TSDataSetGrid);
} else {
	var DataSetGrid = DataSetGrid || {};
	DataSetGrid.TSDataSetGrid = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.TSDataSetGrid;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}