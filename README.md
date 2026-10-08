# Defter – Android-Projekt (Capacitor)

## Voraussetzungen (einmalig)
- Node.js 18 oder neuer (https://nodejs.org, LTS-Version)
- Android Studio (aktuelle Version)

## APK bauen
Öffne ein Terminal (Windows: Eingabeaufforderung/PowerShell) im entpackten Ordner `defter-android` und führe nacheinander aus:

    npm install
    npx cap add android
    node scripts/setup-android.js
    npx cap sync android
    npx cap open android

`npm install` lädt die Bibliotheken und kopiert sie automatisch nach `www/lib` (offline nutzbar).
`npx cap open android` startet Android Studio mit dem Projekt.

In Android Studio:
1. Warten, bis die Gradle-Synchronisierung unten fertig ist (beim ersten Mal dauert das einige Minuten).
2. Menü **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
3. Unten rechts erscheint „APK(s) generated“ > **locate**. Die Datei heißt `app-debug.apk`
   (Pfad: `android/app/build/outputs/apk/debug/`).

## Auf dem Tablet installieren
1. `app-debug.apk` aufs Tablet übertragen (USB-Kabel, Cloud, E-Mail).
2. Datei antippen, „Installation aus unbekannten Quellen“ für die jeweilige App erlauben, installieren.

## Später ändern
Nach Änderungen an `www/index.html`: `npm run sync`, dann in Android Studio erneut „Build APK(s)“.

## Hinweise
- Ordner-Upload: Mit "⬆ Ordner" wählst du ganze Ordner samt Unterordnern und leeren Ordnern über die Android-Ordnerauswahl. Das klappt nur, wenn `node scripts/setup-android.js` ausgeführt wurde (nach `npx cap add android`).
- „📤 Exportieren“ öffnet das Android-Teilen-Menü (z. B. „In Drive speichern“, „Dateien“).
- Die Ablage liegt im Speicher der App. Beim Deinstallieren werden die Daten gelöscht.

## App-Name
Der Name unter dem App-Symbol steht in `capacitor.config.json` (`appName`). Wurde `npx cap add android` schon ausgeführt, ändere ihn zusätzlich in `android/app/src/main/res/values/strings.xml` (`app_name`, `title_activity_main`).
