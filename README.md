# Monorepo for the SERP websites

Notes

- When serving an app, make sure to do it from the root dir

## Serving an app

- `npx nx run daft-fm:serve`
- `daft-fm` being the name of the app, from the apps folder

## Creating a React component

- `npx nx g @nrwl/react:component column-with-dates --project=shared-ui`
- `column-with-dates` being the new name of the folder and will be inserted within /libs/shared/ui/src/lib
- add `--directory` to use a different directory than `lib`

## Notes

- Dont forget to remove the nested git repo if you ticked the git repo option.
-
