/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Αποθήκευση",
      "close": "Κλείσιμο"
    },
    "errors": {
      "noConfigName": "Δεν καθορίστηκε κάποια διαμόρφωση στο index.html > configOptions.story",
      "configFormatError": "Η διαμόρφωση που καθορίστηκε δεν ήταν δυνατό να φορτωθεί λόγω σφάλματος σύνταξης JSON.",
      "configNotFound": "Η διαμόρφωση που καθορίστηκε δεν βρέθηκε ή δεν ήταν δυνατό να φορτωθεί λόγω σφάλματος σύνταξης JSON.",
      "boxTitle": "Παρουσιάστηκε σφάλμα",
      "servedFromFile": "Η πρόσβαση στην εφαρμογή πρέπει να γίνει μέσω web διακομιστή. Για λεπτομέρειες, βλ. ${USER_GUIDE}.",
      "userGuide": "οδηγός χρήστη",
      "invalidConfig": "Μη έγκυρη διαμόρφωση",
      "invalidConfigNoApp": "Το αναγνωριστικό της διαδικτυακής χαρτογραφικής εφαρμογής δεν καθορίζεται στο index.html.",
      "invalidConfigNoAppDev": "Δεν έχει καθοριστεί το αναγνωριστικό ή ο web χάρτης της διαδικτυακής χαρτογραφικής εφαρμογής στις παραμέτρους του URL (?appid= ή ?webmap=). Στη λειτουργία ανάπτυξης, η διαμόρφωση appid και webmap στο αρχείο index.html παραβλέπονται.",
      "unspecifiedConfigOwner": "Δεν έχει διαμορφωθεί εξουσιοδοτημένος κάτοχος.",
      "invalidConfigOwner": "Ο κάτοχος της αφήγησης δεν είναι εξουσιοδοτημένος.",
      "invalidConfignoOAuth": "Αυτή η αφήγηση απαιτεί έλεγχο ταυτότητας. Διαμορφώστε ένα ArcGIS OAuth ID στο index.html ή μετατρέψτε την αφήγηση σε δημόσια.",
      "invalidApp": "Αυτή η αφήγηση δεν ήταν δυνατό να φορτωθεί.",
      "appLoadingFail": "Υπήρξε κάποιο πρόβλημα, το {TPL_NAME} δεν φορτώθηκε σωστά.",
      "notConfiguredDesktop": "Η αφήγηση δεν έχει διαμορφωθεί ακόμη.",
      "notConfiguredMobile": "Το Εργαλείο δημιουργίας {TPL_NAME} δεν υποστηρίζεται σε αυτό το μέγεθος προβολής. Αν είναι δυνατό, αλλάξτε το μέγεθος του προγράμματος περιήγησης για πρόσβαση στο Εργαλείο δημιουργίας ή δημιουργήστε την αφήγησή σας σε μια συσκευή με μεγαλύτερη οθόνη.",
      "notConfiguredMobile2": "Περιστρέψτε τη συσκευή σας στον οριζόντιο προσανατολισμό για να χρησιμοποιήσετε το Εργαλείο δημιουργίας {TPL_NAME}.",
      "notAuthorized": "Δεν έχετε εξουσιοδότηση για πρόσβαση σε αυτήν την αφήγηση.",
      "notAuthorizedBuilder": "Δεν έχετε εξουσιοδότηση για τη χρήση του Εργαλείου δημιουργίας {TPL_NAME}.",
      "noViewerIE": "Αυτή η αφήγηση δεν υποστηρίζεται σε Internet Explorer έκδοσης προηγούμενης της ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Επιχειρείτε να προβάλετε αυτήν την αφήγηση χρησιμοποιώντας ένα παλαιότερο, μη υποστηριζόμενο πρόγραμμα περιήγησης. Ενδέχεται κάποια στοιχεία να μη λειτουργούν ή να παρουσιαστούν άλλα, μη αναμενόμενα προβλήματα. Προτείνουμε να αναβαθμίσετε σε Internet Explorer 11 ή να χρησιμοποιήσετε κάποιο άλλο πρόγραμμα περιήγησης, όπως το Chrome.",
      "noViewerIE3": "Στα τέλη του 2017, δεν θα είναι δυνατή πλέον η φόρτωση αυτής της αφήγησης στο συγκεκριμένο πρόγραμμα περιήγησης. Τότε θα πρέπει να χρησιμοποιήσετε ένα υποστηριζόμενο πρόγραμμα περιήγησης για να προβάλετε αυτή την αφήγηση.",
      "upgradeBrowser": "Ενημερώστε το πρόγραμμα περιήγησης που χρησιμοποιείτε",
      "mapLoadingFail": "Υπήρξε κάποιο πρόβλημα, ο χάρτης δεν φορτώθηκε σωστά.",
      "signOut": "Έξοδος",
      "builderSupport1": "Το Εργαλείο δημιουργίας Story Map Cascade υποστηρίζεται μόνο σε ${CHROME} και ${SAFARI}. Ωστόσο, οι αφηγήσεις Cascade που έχετε δημιουργήσει με το Εργαλείο δημιουργίας, μπορούν να προβάλλονται σε αυτά τα προγράμματα περιήγησης, σε Internet Explorer 11+ και Firefox.",
      "builderSupport2": "Το Εργαλείο δημιουργίας Story Map Cascade δεν υποστηρίζεται σε iPad. Οι αφηγήσεις Cascade που δημιουργείτε και κοινοποιείτε θα λειτουργούν σε iPad.",
      "builderSupport3": "Οι αφηγήσεις Cascade μπορούν να προβληθούν σε Chrome, Safari, Firefox και Internet Explorer 11+, αλλά το Εργαλείο δημιουργίας Story Map Cascade υποστηρίζεται μόνο σε ${CHROME} και ${SAFARI}.",
      "builderSupport4": "Οι αφηγήσεις Cascade μπορούν να προβληθούν σε Chrome, Safari, Firefox και Internet Explorer 11+, αλλά το Εργαλείο δημιουργίας Story Map Cascade υποστηρίζεται μόνο σε ${CHROME} και ${SAFARI}.<br><br>Εάν χρειάζεστε το Εργαλείο δημιουργίας Cascade να υποστηρίζει κάποιο άλλο πρόγραμμα περιήγησης, απευθυνθείτε στην ${ESRI-SUPPORT} ή κάντε κλικ για να ψηφίσετε: ${FIREFOX-BUILDER} | ${IE-BUILDER}.",
      "sorry": "Προσοχή:"
    },
    "mobileWarning": {
      "message1": "Έχετε διαβάσει την έκδοση αυτής της αφήγησης για κινητές συσκευές. Για την πλήρη έκδοση, με εμπλουτισμένα στοιχεία πολυμέσων, δοκιμάστε τη σε επιτραπέζιο υπολογιστή.",
      "email": "Αποστολή συνδέσμου προς αυτή την αφήγηση μέσω ηλεκτρονικού ταχυδρομείου"
    },
    "media": {
      "captionPlaceholder": "Η λεζάντα σας εδώ...",
      "loadingError": "Δυστυχώς, αυτό το περιεχόμενο δεν είναι προσβάσιμο",
      "explore": "Εξερεύνηση",
      "exploreMap": "Εξερεύνηση χάρτη",
      "exploreStop": "Διακοπή εξερεύνησης",
      "sceneNotSupported": "Δυστυχώς, αυτός ο 3D χάρτης δεν υποστηρίζεται στη συσκευή σας.",
      "loading1": "Φόρτωση...",
      "loading2": "Φόρτωση χάρτη...",
      "videoPlayPause": "αναπαραγωγή/παύση",
      "videoMuteUnmute": "σίγαση/αναίρεση σίγασης"
    },
    "headerFromCommon": {
      "defaultTagline": "Ένα ${STORY_MAP}",
      "share": "Κοινοποίηση",
      "tooltipAutoplayDisabled": "Αυτή η επιλογή δεν είναι διαθέσιμη στη λειτουργία αυτόματης αναπαραγωγής"
    },
    "shareFromCommon": {
      "copy": "Αντιγραφή",
      "copied": "Αντιγράφηκε",
      "open": "Άνοιγμα",
      "embed": "Ενσωμάτωση σε ιστοσελίδα",
      "embedExplain": "Χρησιμοποιήστε τον παρακάτω HTML κώδικα για να ενσωματώσετε την αφήγηση σε μια ιστοσελίδα.",
      "size": "Μέγεθος (πλάτος/ύψος):",
      "autoplayLabel": "Λειτουργία αυτόματης αναπαραγωγής",
      "autoplayExplain1": "Η λειτουργία αυτόματης αναπαραγωγής θα συνεχίζει στην αφήγησή σας σε τακτικά διαστήματα. Αυτό είναι ιδανικό για τις οθόνες καταστημάτων ή δημόσιας προβολής, αλλά σημειώστε ότι σε άλλες περιπτώσεις, ενδέχεται να είναι δυσκολότερη η ανάγνωση της αφήγησης. Αυτή η δυνατότητα δεν υποστηρίζεται σε μικρές οθόνες.",
      "autoplayExplain2": "Όταν αυτή η λειτουργία είναι ενεργή υπάρχουν στοιχεία ελέγχου για την αναπαραγωγή/παύση της αφήγησης και τη ρύθμιση της ταχύτητας πλοήγησης.",
      "linksupdated": "Οι σύνδεσμοι ενημερώθηκαν!"
    }
  }
});