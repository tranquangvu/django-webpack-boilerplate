# Django Webpack Boilerplate

Django 3.x starter with Webpack configurations for assets manager (ES5+, SCSS, ...)

## General Information

- Python version: `3.9.0`
- Django version: `3.1.7`
- Webpack version: `5.10.0`
- Database engine: `postgresql`

## Installation

1. Make sure you have installed `pyenv`, `python`, `poetry`, `django`, `nodejs`
2. Install correct python version
```
  pyenv install 3.9.0
  pyenv local 3.9.0
```
3. Install pip packages
```
  poetry install
```
4. Install nodejs packages
```
  npm install
```
5. Add `.env` file to `app/.env` follow `app/.env.example`, you must have at least `DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME` for database connecting. Here's sample for development
```
  DB_HOST=localhost
  DB_PORT=5432
  DB_USER=postgres
  DB_PASSWORD=pwd123
  DB_NAME=djangostarter

  SENDGRID_USER=userxxx
  SENDGRID_PASSWORD=passwordxxx
  DEFAULT_FROM_EMAIL=noreply@domain.com
```
6. Run migrations
```
  poetry run python manage.py migrate
```
7. Start webpack assets manager
```
  npm run assets:dev
```
8. Start django server
```
  poetry run python manage.py runserver
```
9. Check `http://localhost:8000` and start coding

## Multiple Pages Assets Manager

1. Check webpack entry points guide for multiple pages application [https://webpack.js.org/concepts/entry-points/#multi-page-application](https://webpack.js.org/concepts/entry-points/#multi-page-application)

```
// Edit `webpack.common.js` file

module.exports = {
  entry: {
    entryname: './path/to/my/entry/file.js',
  },
  ...
};
```

Stop webpack assets manager and restart it again `npm run assets:dev`

2. Load styles to django templates

```
  {% load manifest %}
  <link rel="stylesheet" type="text/css" href="{% manifest 'entryname.css' %}">
```

3. Load javascripts to django templates

```
  {% load manifest %}
  <script type="text/javascript" src="{% manifest 'entryname.js' %}"></script>
```

## Deployment

Coming soon...

## License

Licensed under the MIT license, see the separate LICENSE.md file.
