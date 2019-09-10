#!/usr/bin/env bash

firebase use auk-elections

REACT_APP_ENV=production npm run build

firebase deploy