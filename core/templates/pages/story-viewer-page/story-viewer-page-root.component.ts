// Copyright 2021 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Root component for Story Viewer Page.
 */

import { Component, ViewEncapsulation } from '@angular/core';
import { I18nLanguageCodeService } from 'services/i18n-language-code.service';

@Component({
  selector: 'oppia-story-viewer-page-root',
  templateUrl: './story-viewer-page-root.component.html',
  encapsulation: ViewEncapsulation.None
})
export class StoryViewerPageRootComponent {
  // Page title and meta tags are not required to be updated here
  // as the page title is updated by story viewer page component
  // and this pages uses default meta tags.
  constructor(
    private i18nLanguageCodeService: I18nLanguageCodeService
  ) {}

  isLanguageRTL(): boolean {
    return this.i18nLanguageCodeService.isCurrentLanguageRTL();
  }
}
