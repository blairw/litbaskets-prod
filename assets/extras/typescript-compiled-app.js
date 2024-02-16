var DataHelper = /** @class */ (function () {
    function DataHelper() {
    }
    DataHelper.populateSjmdArrayToDictionary = function () {
        var _this = this;
        this.savedJournalsMasterDataDictionary = {}; // reset.
        this.savedJournalsMasterDataArray.forEach(function (thisJournal) {
            _this.savedJournalsMasterDataDictionary[thisJournal.journal_id] = thisJournal;
        });
    };
    DataHelper.savedJournalsMasterDataArray = [];
    DataHelper.savedJournalsMasterDataDictionary = {};
    return DataHelper;
}());
var TSJournal = /** @class */ (function () {
    function TSJournal() {
    }
    return TSJournal;
}());
var UIJournalSelectorController = /** @class */ (function () {
    function UIJournalSelectorController() {
    }
    UIJournalSelectorController.selectedJournalIdsForSearch = [];
    return UIJournalSelectorController;
}());
var UsefulHelper = /** @class */ (function () {
    function UsefulHelper() {
    }
    UsefulHelper.nvl = function (value, fallbackValue) {
        return typeof value !== 'undefined' && value != null
            ? value
            : fallbackValue;
    };
    return UsefulHelper;
}());
// Generated by generate.sh, do not edit this file manually
var UserDataExtraJournals = [
    {
        "journal_id": "SCOPUS_22486",
        "journal_name": "R and D Management",
        "url": "https://onlinelibrary.wiley.com/journal/14679310",
        "issn": "0033-6807",
        "issne": "1467-9310",
        "scopus_sourceid": "22486",
        "scopus_coverage": "1970-ongoing",
        "is_extra_journal": true
    },
    {
        "journal_id": "SCOPUS_28945",
        "journal_name": "Industrial and Corporate Change",
        "url": "https://academic.oup.com/icc",
        "issn": "0960-6491",
        "issne": "1464-3650",
        "scopus_sourceid": "28945",
        "scopus_coverage": "1992-ongoing",
        "is_extra_journal": true
    }
];
