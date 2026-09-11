# Hugo-Demo im Stil der Würzburger Dommusik

Dies ist eine eigenständige Hugo-Umsetzung, die sich gestalterisch an einer modernen kirchenmusikalischen Website orientiert: helle Kopfzeile, blaues Farbsystem auf Basis von `#1c4478`, großflächiger Einstieg, klare typografische Hierarchie, Nachrichtenliste, Veranstaltungskarten, Förder-CTA, Kontaktbereich und dunkler Footer.

**Nicht enthalten:** Suche, RSS, Original-Logo, Originaltexte, Originalfotos, TYPO3-spezifische Funktionen.

## Voraussetzungen

- Hugo Extended
- Dart Sass im `PATH`

Die Styles werden beim Hugo-Build aus SCSS erzeugt. JavaScript wird ebenfalls über Hugo Pipes verarbeitet. Es gibt daher keine gebauten CSS- oder JS-Dateien unter `static/`.

## Start

```bash
hugo server
```

Die Seite ist anschließend typischerweise unter `http://localhost:1313/` erreichbar.

Für einen Produktionsbuild:

```bash
hugo --minify
```

## Struktur

```text
hugo.toml                       Grundeinstellungen + Navigation
assets/
├── scss/
│   ├── _theme.scss             CSS Custom Properties / Design Tokens
│   ├── _variables.scss         Sass-only Tokens, z. B. Breakpoints
│   ├── _base.scss
│   ├── _header.scss
│   ├── _hero.scss
│   ├── _sections.scss
│   ├── _footer.scss
│   ├── _responsive.scss
│   └── main.scss               SCSS-Einstieg für Hugo Pipes
└── js/
    └── main.js                 Mobile-Menü, Hero-Slider, Back-to-top
static/
└── images/                     eigene/lizenzierte Bilder

data/home.yaml                  Hero-Slides, Nachrichten, Termine
content/                        Markdown-Inhalte
layouts/index.html              Startseite
layouts/_default/               Standard-Layouts
layouts/partials/
├── header.html
├── footer.html
├── styles.html                 SCSS-Pipeline
└── scripts.html                JS-Pipeline
```

## Hugo Pipe für SCSS

`layouts/partials/styles.html` holt `assets/scss/main.scss`, kompiliert es mit Dart Sass und erzeugt im Produktionsbuild einen fingerprinteten Asset-Namen mit Subresource Integrity.

Sinngemäß:

```go-html-template
{{ with resources.Get "scss/main.scss" }}
  {{ $opts := dict
    "transpiler" "dartsass"
    "outputStyle" (cond hugo.IsDevelopment "expanded" "compressed")
    "targetPath" "css/main.css"
  }}
  {{ with . | css.Sass $opts }}
    {{ with . | fingerprint "sha256" }}
      <link rel="stylesheet" href="{{ .RelPermalink }}" integrity="{{ .Data.Integrity }}" crossorigin="anonymous">
    {{ end }}
  {{ end }}
{{ end }}
```

Im Development-Modus wird kein Fingerprint verwendet und eine Source Map erzeugt.

## Hugo Pipe für JavaScript

`layouts/partials/scripts.html` verarbeitet `assets/js/main.js` mit `js.Build`. Im Produktionsbuild wird das Script minifiziert und fingerprintet; im Development-Modus bleibt es lesbar und erhält eine Source Map.

Damit ist `assets/` die einzige Quelle für Styles und JavaScript. `static/` wird nur noch für unverarbeitete Dateien wie Bilder verwendet.

## Farben und Design Tokens

Alle zur Laufzeit verwendeten Design-Tokens stehen zentral in:

```text
assets/scss/_theme.scss
```

Beispiel:

```scss
:root {
  --color-accent: #1c4478;
  --color-accent-strong: #12345f;
  --color-accent-hover: #285a96;
  --color-accent-light: #8fb2da;
  --color-paper: #ffffff;
  --color-ink: #142338;
}
```

Komponenten referenzieren diese Werte ausschließlich über `var(--...)`.

`assets/scss/_variables.scss` enthält nur Werte, die als Sass-Compile-Time-Variablen benötigt werden. Aktuell sind das die Breakpoints, weil CSS Custom Properties in Media-Query-Bedingungen nicht zuverlässig einsetzbar sind.

## Eigene Hero-Fotos

In `data/home.yaml` kannst du jedem Slide optional einen Bildpfad aus `static/images/` geben:

```yaml
slides:
  - kicker: "Willkommen ..."
    title: "Sing mit!"
    text: "..."
    link: "/choere/"
    tone: "choir"
    image: "/images/chor.jpg"
```

Ohne `image` erscheinen abstrakte CSS-Platzhalter.

## Inhalte

Die Startseiteninhalte liegen in `data/home.yaml`. Unterseiten werden als Markdown-Dateien unter `content/` gepflegt. Die Navigation ist in `hugo.toml` konfiguriert.

## Kontaktformular

Das Formular ist statisch und sendet nicht an einen Server. Für eine echte Website muss `action` in `layouts/index.html` an einen eigenen Endpoint oder Formulardienst angebunden werden.

## Design-Hinweis

Die Umsetzung ist eine visuell ähnliche Neuentwicklung, kein 1:1-Export des Original-CSS. Dadurch bleibt die Hugo-Seite wartbar und unabhängig vom ursprünglichen CMS.

## Decap CMS

Das Projekt enthält ein Decap-CMS unter `/admin/`. Die Admin-Seite selbst wird von Hugo gerendert; das CMS-JavaScript liegt unter `assets/js/admin.js` und wird ausschließlich auf der Admin-Route über `js.Build` gebündelt. Es gibt weiterhin keine CSS- oder JavaScript-Buildartefakte unter `static/`.

Die Konfiguration liegt bewusst als unverarbeitete Datei unter:

```text
static/admin/config.yml
```

Medien-Uploads landen in `static/images/uploads/` und werden im Content als `/images/uploads/...` referenziert.

### Einmalig installieren

```bash
npm install
```

### Lokal mit CMS arbeiten

Terminal 1:

```bash
hugo server
```

Terminal 2:

```bash
npm run cms
```

Anschließend:

```text
http://localhost:1313/admin/
```

`local_backend: true` sorgt dafür, dass Decap beim lokalen Aufruf über den Decap-Proxy direkt in dein lokales Git-Arbeitsverzeichnis schreibt. Das Repository sollte daher mit Git initialisiert sein.

### Produktiv: Netlify Identity + Git Gateway

Die mitgelieferte `static/admin/config.yml` verwendet standardmäßig:

```yaml
backend:
  name: git-gateway
  branch: main
```

Für den Produktivbetrieb musst du die Site mit einem Git-Repository verbinden und in Netlify **Identity** sowie **Git Gateway** aktivieren. Danach können freigeschaltete Redakteurinnen und Redakteure `/admin/` öffnen und Inhalte bearbeiten.

Falls du nicht Netlify für die Authentifizierung nutzen willst, kannst du den Backend-Block beispielsweise auf `github`, `gitlab`, `gitea` usw. umstellen. Beim GitHub-Backend ist zusätzlich ein OAuth-Endpunkt bzw. OAuth-Proxy erforderlich.

### Was im CMS editierbar ist

- Hero-Slides der Startseite
- Nachrichten auf der Startseite
- Veranstaltungen auf der Startseite
- Porträt-, Förder- und Kontaktbereich
- Hauptseiten Chöre, Domsingschule, Orgelmusik und Über uns
- Bilder über die Medienbibliothek

Die Navigation und globalen Site-Parameter bleiben vorerst bewusst in `hugo.toml`, damit das CMS keine strukturellen Konfigurationsfehler in der Hugo-Konfiguration erzeugen kann.
