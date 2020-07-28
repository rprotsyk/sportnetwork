nx g @nrwl/workspace:run-commands deploy \
  --project web \
  --command "cd dist/apps/web && cp ../../../apps/web/Dockerfile . && heroku container:login && heroku container:push web -a asportnet && heroku container:release web -a asportnet"