# Dateiablage als Web-App für iPad und iPhone (offline)

Die App läuft komplett im Gerät. Nach der einmaligen Einrichtung braucht sie kein Internet mehr.

## 1. Ordner ins Internet stellen (einmalig, nur zum Installieren)
Die Dateien in diesem Ordner müssen einmal unter einer https-Adresse erreichbar sein. Zwei einfache Wege:
- **Netlify:** auf app.netlify.com/drop den ganzen Ordner "dateiablage-pwa" ins Browserfenster ziehen. Du bekommst einen Link. Mit einem kostenlosen Konto bleibt die Seite dauerhaft bestehen (ohne Konto wird sie nach kurzer Zeit gelöscht).
- **GitHub Pages:** Dateien in ein neues GitHub-Repository hochladen, unter Settings > Pages aktivieren.

## 2. Auf dem iPad/iPhone installieren
1. Den Link in **Safari** öffnen (nicht in Chrome).
2. Teilen-Symbol > **Zum Home-Bildschirm** > Hinzufügen.
3. Die App **über das neue Symbol** starten, solange du online bist. Warte, bis "Offline-Modus bereit" erscheint.
4. Test: Flugmodus einschalten, App vom Home-Bildschirm neu starten. Sie muss normal laufen.

## 3. Songtexte hochladen
- Immer nur über die App vom Home-Bildschirm hochladen, nicht im Safari-Tab.
- Lade in Portionen hoch (zum Beispiel 100 bis 200 MB pro Durchgang), nicht 1 GB auf einmal. Unten in der Ordnerliste steht, wie viel Speicher belegt ist.
- Nach dem Hochladen indexiert die App die Inhalte im Hintergrund, damit die Volltextsuche funktioniert (Statuszeile unter dem Suchfeld). Das darf einige Minuten dauern. Bleibe so lange in der App.
- Teste zuerst mit einem kleinen Teil, bevor du alles hochlädst.

## Wichtig
- Die Daten liegen nur auf diesem Gerät. iPad und iPhone haben getrennte Ablagen. Sichere wichtige Dateien zusätzlich (Original behalten oder "Herunterladen").
- iOS entscheidet über den Speicherplatz für Web-Apps. Für Apps vom Home-Bildschirm ist er großzügig, eine feste Zusage gibt es aber nicht. Beim Löschen der App gehen die Daten verloren.
- Updates: Neue Dateien auf den Webspace laden und in sw.js die Zahl bei `dateiablage-v1` erhöhen (v2, v3 ...). Die App aktualisiert sich dann beim nächsten Start mit Internet.
