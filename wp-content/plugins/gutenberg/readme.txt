=== Gutenberg ===
Contributors: matveb, joen, karmatosed
Requires at least: 5.0.0
Tested up to: 5.0
Stable tag: 4.9.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A new editing experience for WordPress is in the works, with the goal of making it easier than ever to make your words, pictures, and layout look just right. This is the beta plugin for the project.

== Description ==

Gutenberg is more than an editor. While the editor is the focus right now, the project will ultimately impact the entire publishing experience including customization (the next focus area).

<a href="https://wordpress.org/gutenberg">Discover more about the project</a>.

= Editing focus =

> The editor will create a new page- and post-building experience that makes writing rich posts effortless, and has “blocks” to make it easy what today might take shortcodes, custom HTML, or “mystery meat” embed discovery. — Matt Mullenweg

One thing that sets WordPress apart from other systems is that it allows you to create as rich a post layout as you can imagine -- but only if you know HTML and CSS and build your own custom theme. By thinking of the editor as a tool to let you write rich posts and create beautiful layouts, we can transform WordPress into something users _love_ WordPress, as opposed something they pick it because it's what everyone else uses.

Gutenberg looks at the editor as more than a content field, revisiting a layout that has been largely unchanged for almost a decade.This allows us to holistically design a modern editing experience and build a foundation for things to come.

Here's why we're looking at the whole editing screen, as opposed to just the content field:

1. The block unifies multiple interfaces. If we add that on top of the existing interface, it would _add_ complexity, as opposed to remove it.
2. By revisiting the interface, we can modernize the writing, editing, and publishing experience, with usability and simplicity in mind, benefitting both new and casual users.
3. When singular block interface takes center stage, it demonstrates a clear path forward for developers to create premium blocks, superior to both shortcodes and widgets.
4. Considering the whole interface lays a solid foundation for the next focus, full site customization.
5. Looking at the full editor screen also gives us the opportunity to drastically modernize the foundation, and take steps towards a more fluid and JavaScript powered future that fully leverages the WordPress REST API.

= Blocks =

Blocks are the unifying evolution of what is now covered, in different ways, by shortcodes, embeds, widgets, post formats, custom post types, theme options, meta-boxes, and other formatting elements. They embrace the breadth of functionality WordPress is capable of, with the clarity of a consistent user experience.

Imagine a custom “employee” block that a client can drag to an About page to automatically display a picture, name, and bio. A whole universe of plugins that all extend WordPress in the same way. Simplified menus and widgets. Users who can instantly understand and use WordPress  -- and 90% of plugins. This will allow you to easily compose beautiful posts like <a href="http://moc.co/sandbox/example-post/">this example</a>.

Check out the <a href="https://wordpress.org/gutenberg/handbook/reference/faq/">FAQ</a> for answers to the most common questions about the project.

= Compatibility =

Posts are backwards compatible, and shortcodes will still work. We are continuously exploring how highly-tailored metaboxes can be accommodated, and are looking at solutions ranging from a plugin to disable Gutenberg to automatically detecting whether to load Gutenberg or not. While we want to make sure the new editing experience from writing to publishing is user-friendly, we’re committed to finding  a good solution for highly-tailored existing sites.

= The stages of Gutenberg =

Gutenberg has three planned stages. The first, aimed for inclusion in WordPress 5.0, focuses on the post editing experience and the implementation of blocks. This initial phase focuses on a content-first approach. The use of blocks, as detailed above, allows you to focus on how your content will look without the distraction of other configuration options. This ultimately will help all users present their content in a way that is engaging, direct, and visual.

These foundational elements will pave the way for stages two and three, planned for the next year, to go beyond the post into page templates and ultimately, full site customization.

Gutenberg is a big change, and there will be ways to ensure that existing functionality (like shortcodes and meta-boxes) continue to work while allowing developers the time and paths to transition effectively. Ultimately, it will open new opportunities for plugin and theme developers to better serve users through a more engaging and visual experience that takes advantage of a toolset supported by core.

= Contributors =

Gutenberg is built by many contributors and volunteers. Please see the full list in <a href="https://github.com/WordPress/gutenberg/blob/master/CONTRIBUTORS.md">CONTRIBUTORS.md</a>.

== Frequently Asked Questions ==

= How can I send feedback or get help with a bug? =

We'd love to hear your bug reports, feature suggestions and any other feedback! Please head over to <a href="https://github.com/WordPress/gutenberg/issues">the GitHub issues page</a> to search for existing issues or open a new one. While we'll try to triage issues reported here on the plugin forum, you'll get a faster response (and reduce duplication of effort) by keeping everything centralized in the GitHub repository.

= How can I contribute? =

We’re calling this editor project "Gutenberg" because it's a big undertaking. We are working on it every day in GitHub, and we'd love your help building it.You’re also welcome to give feedback, the easiest is to join us in <a href="https://make.wordpress.org/chat/">our Slack channel</a>, `#core-editor`.

See also <a href="https://github.com/WordPress/gutenberg/blob/master/CONTRIBUTING.md">CONTRIBUTING.md</a>.

= Where can I read more about Gutenberg? =

- <a href="http://matiasventura.com/post/gutenberg-or-the-ship-of-theseus/">Gutenberg, or the Ship of Theseus</a>, with examples of what Gutenberg might do in the future
- <a href="https://make.wordpress.org/core/2017/01/17/editor-technical-overview/">Editor Technical Overview</a>
- <a href="https://wordpress.org/gutenberg/handbook/reference/design-principles/">Design Principles and block design best practices</a>
- <a href="https://github.com/Automattic/wp-post-grammar">WP Post Grammar Parser</a>
- <a href="https://make.wordpress.org/core/tag/gutenberg/">Development updates on make.wordpress.org</a>
- <a href="https://wordpress.org/gutenberg/handbook/">Documentation: Creating Blocks, Reference, and Guidelines</a>
- <a href="https://wordpress.org/gutenberg/handbook/reference/faq/">Additional frequently asked questions</a>


== Changelog ==

= Latest =

### Features
- Add a new [RSS block](https://github.com/WordPress/gutenberg/pull/7966) and follow-up improvements: [1](https://github.com/WordPress/gutenberg/pull/13501), [2](https://github.com/WordPress/gutenberg/pull/13502).
- Add a new [Amazon Kindle embed block](https://github.com/WordPress/gutenberg/pull/13510).
- Add a new [FocalPointPicker](https://github.com/WordPress/gutenberg/pull/10925) component and use it to define the focal point of the Cover block background.

### Enhancements
- Optimize the re-rendering performance when [inserting/removing blocks](https://github.com/WordPress/gutenberg/pull/13067).
- Improve the [Reusable Blocks UX](https://github.com/WordPress/gutenberg/pull/12378) for contributor users.
- Disable [embed previews](https://github.com/WordPress/gutenberg/pull/12961) for the smugmug provider.
- Make [the fullscreen mode](https://github.com/WordPress/gutenberg/pull/13425) a desktop-only feature.
- Accessibility: Add [speak messages](https://github.com/WordPress/gutenberg/pull/13385) when using the FeatureToggle component.
- Accessibility:  Change the inserter [search result message](https://github.com/WordPress/gutenberg/pull/13388) from assertive to polite.
- Accessibility:  Remove [duplicate aria label](https://github.com/WordPress/gutenberg/pull/12955) from menu items.
- Remove the "[Show Download Button](https://github.com/WordPress/gutenberg/pull/13485)" toggle help text in the File block.
- Render [the block switcher as disabled](https://github.com/WordPress/gutenberg/pull/13431) if not available in a multi-selection.
- Use a back arrow icon to clarify the [Fullscreen mode exit button](https://github.com/WordPress/gutenberg/pull/13403).
- Limit the [Gallery block columns count](https://github.com/WordPress/gutenberg/pull/13488) to the images count.
- Automatically set a [default block style](https://github.com/WordPress/gutenberg/pull/12519) if missing.
- Hide [empty categories](https://github.com/WordPress/gutenberg/pull/13549) from the Categories block in the editor.
- Increase the padding of [the gallery captions](https://github.com/WordPress/gutenberg/pull/13623).
- Add [left/right alignments](https://github.com/WordPress/gutenberg/pull/8814) to the latest posts block.
- Improve the [columns margins](https://github.com/WordPress/gutenberg/pull/12199).
- Add a [help text for the hide teaser toggle](https://github.com/WordPress/gutenberg/pull/13630) in the More block.
- Improve the wording of the [embed block messages](https://github.com/WordPress/gutenberg/pull/13644).

### Bug Fixes
- Accessibility: Fix [the tab order](https://github.com/WordPress/gutenberg/pull/11863) of the date picker component.
- Support [non hierarchical taxonomies](https://github.com/WordPress/gutenberg/pull/13076) in the category selector component.
- Fix blocks [marked invalid incorrectly](https://github.com/WordPress/gutenberg/pull/13512) due to special HTML characters.
- Fix the [Notice component styling](https://github.com/WordPress/gutenberg/pull/13371).
- Fix the [:root selector](https://github.com/WordPress/gutenberg/pull/13325) in the editor styles.
- Fix [duplicate block](https://github.com/WordPress/gutenberg/pull/12882) toolbars.
- Fix [warning message](https://github.com/WordPress/gutenberg/pull/12933) when using the DateTimePicker component.
- Fix the [File block](https://github.com/WordPress/gutenberg/pull/13432) and [Categories block](https://github.com/WordPress/gutenberg/pull/13439) style when applying custom classnames.
- Fix the [Gallery block styling](https://github.com/WordPress/gutenberg/pull/13326) in Microsoft Edge.
- Fix the [Button block styling](https://github.com/WordPress/gutenberg/pull/12183) when links are visited.
- Fix Block Style [preview not dismissed](https://github.com/WordPress/gutenberg/pull/12317) after selection.
- Fix [TabPanel buttons](https://github.com/WordPress/gutenberg/pull/11944) incorrectly submitting forms.
- Fix [hierarchical dropdown](https://github.com/WordPress/gutenberg/pull/13567) in the Categories block.
- Fix [wording](https://github.com/WordPress/gutenberg/pull/13479) for the color picker saturation.
- Fix the [save keyboard shortcut](https://github.com/WordPress/gutenberg/pull/13159) while in the code editor mode.
- Fix the [Google Docs table](https://github.com/WordPress/gutenberg/pull/13543) pasting.
- Fix [jumps when indenting/outdenting](https://github.com/WordPress/gutenberg/pull/12941) list items.
- Fix [FontSizePicker max width](https://github.com/WordPress/gutenberg/pull/13264) on mobile.
- Fix PHP 5.2.2 [Parser issue](https://github.com/WordPress/gutenberg/pull/13369).
- Fix [plural messages](https://github.com/WordPress/gutenberg/pull/13577) POT generation.
    
### Various
- Add [ESnext build setup](https://github.com/WordPress/gutenberg/pull/12837) and commands to the @wordpress/scripts package.
- Add "[focus on mount](https://github.com/WordPress/gutenberg/pull/12855)" config to the DropDown component.
- Improve [the error handling](https://github.com/WordPress/gutenberg/pull/13315) in the data module resulting in clearer messages displayed in the console.
- Support [marking days as invalid](https://github.com/WordPress/gutenberg/pull/12962) in the DatePicker component.
- Support [block transforms](https://github.com/WordPress/gutenberg/pull/11979) with inner blocks.
- Improve the styles of the [editor notices with actions](https://github.com/WordPress/gutenberg/pull/13116).
- Replace Polldaddy embed block with [Crowdsignal](https://github.com/WordPress/gutenberg/pull/12854).
- Avoid [setting the generic Edit Post](https://github.com/WordPress/gutenberg/pull/13552) Title on load.
- Deprecate [window._wpLoadGutenbergEditor](https://github.com/WordPress/gutenberg/pull/13547).
- [Avoid an empty classname](https://github.com/WordPress/gutenberg/pull/11831) when deleting custom classnames.
- Add [className prop support](https://github.com/WordPress/gutenberg/pull/13568) to the ServerSideRender component.

### Documentation
- Improve the components README files DropdownMenu & RangeControl.
- Add code example of the [MediaPlaceholder](https://github.com/WordPress/gutenberg/pull/13389) component.
- Add a [accessibility dedicated](https://github.com/WordPress/gutenberg/pull/13169) page.
- Add a [Git workflow](https://github.com/WordPress/gutenberg/pull/13534) documentation page.
- Reorganize [the contributors guide](https://github.com/WordPress/gutenberg/pull/13352).
- Mention [the dark theme support](https://github.com/WordPress/gutenberg/pull/13375) in the design docs.
- Enhance [the compose package](https://github.com/WordPress/gutenberg/pull/13496)  [documentation](https://github.com/WordPress/gutenberg/pull/13504).
- Expand [the block templates](https://github.com/WordPress/gutenberg/pull/13494/) code examples.
- Fix [unregisterBlockType](https://github.com/WordPress/gutenberg/pull/13273) code examples.
- Clarify the block styles [isDefault property](https://github.com/WordPress/gutenberg/pull/11478).
- Move the [npm packages management](https://github.com/WordPress/gutenberg/pull/13418/) documentation to a dedicated page.
- Add a section explaining [the links usage](https://github.com/WordPress/gutenberg/pull/13422) in the documentation.
- Add a note about the [wp-editor dependency](https://github.com/WordPress/gutenberg/pull/12731) when using RichText.
- Update the [isShallowEqual package](https://github.com/WordPress/gutenberg/pull/13526) documentation and tests.
- Refresh the [repository management](https://github.com/WordPress/gutenberg/pull/13495) doc.
- Typos: [1](https://github.com/WordPress/gutenberg/pull/13409), [2](https://github.com/WordPress/gutenberg/pull/13302), [3](https://github.com/WordPress/gutenberg/pull/13541), [4](https://github.com/WordPress/gutenberg/pull/13524), [5](https://github.com/WordPress/gutenberg/pull/13531), [6](https://github.com/WordPress/gutenberg/pull/13582), [7](https://github.com/WordPress/gutenberg/pull/13595).

### Chore
- Remove PHP Code maintained in Core and bump [minimum WordPress version](https://github.com/WordPress/gutenberg/pull/13370):
  - [Block registration](https://github.com/WordPress/gutenberg/pull/13412).
  - [REST API](https://github.com/WordPress/gutenberg/pull/13408) Endpoints.
  - [Markdown](https://github.com/WordPress/gutenberg/pull/13473) support fix.
  - Gutenberg [body classname](https://github.com/WordPress/gutenberg/pull/13572) and [responsive classname](https://github.com/WordPress/gutenberg/pull/13461).   
  - [Preloading](https://github.com/WordPress/gutenberg/pull/13453) API calls.
  - [Block detection utilities](https://github.com/WordPress/gutenberg/pull/13467). 
  - [List screen](https://github.com/WordPress/gutenberg/pull/13459)  [integration](https://github.com/WordPress/gutenberg/pull/13471). 
  - [Block content version](https://github.com/WordPress/gutenberg/pull/13469). 
  - [Block categories](https://github.com/WordPress/gutenberg/pull/13454) hook. 
  - [TinyMCE scripts](https://github.com/WordPress/gutenberg/pull/13466) registration. 
  - [Reusable blocks post type](https://github.com/WordPress/gutenberg/pull/13468)  [labels](https://github.com/WordPress/gutenberg/pull/13472) and [listing page](https://github.com/WordPress/gutenberg/pull/13456). 
  - [Block Types Initialization](https://github.com/WordPress/gutenberg/pull/13457).
  - [PHP Unit tests](https://github.com/WordPress/gutenberg/pull/13513).
  - [Compatibility](https://github.com/WordPress/gutenberg/pull/13442) script.
  - [Meta boxes](https://github.com/WordPress/gutenberg/pull/13449) support.
  - [Polyfills](https://github.com/WordPress/gutenberg/pull/13536). 
  - [oEmbed Proxy](https://github.com/WordPress/gutenberg/pull/13575) Endpoint filter.
  - [Visual Editing](https://github.com/WordPress/gutenberg/pull/13608) Disabling.
- Update [browserlist dependency](https://github.com/WordPress/gutenberg/pull/13395). 
- New E2E tests: [Date floating for pending posts](https://github.com/WordPress/gutenberg/pull/13281).
- New ESlint rules:
  - Enforce ES6 [object shorthand](https://github.com/WordPress/gutenberg/pull/13400) syntax.
  - [Declare variables](https://github.com/WordPress/gutenberg/pull/12828) only when used.
- Use [ES5 eslint config](https://github.com/WordPress/gutenberg/pull/13428) for the is-shallow-equal package.
- Mark the eslint config as [a root config](https://github.com/WordPress/gutenberg/pull/13483).
- Remove [the feedback form](https://github.com/WordPress/gutenberg/pull/10705) from the plugin.
- I18n:
  - Use [a placeholder](https://github.com/WordPress/gutenberg/pull/13487) for the WordPress minimum version.
  - Use [Sentence case](https://github.com/WordPress/gutenberg/pull/12239) in toolbar tooltips.
- Add [the FontAwesome licenses](https://github.com/WordPress/gutenberg/pull/12929) to the GPL 2 compatible licenses.
- Move the [generated spec parser](https://github.com/WordPress/gutenberg/pull/13493) to the corresponding package.
- Refactor the [nonce  apiFetch middleware](https://github.com/WordPress/gutenberg/pull/13451).
- Refactor the list block [indent/outdent buttons](https://github.com/WordPress/gutenberg/pull/12667).
- Fix [watching file changes](https://github.com/WordPress/gutenberg/pull/13448) on Linux.
- Update [the question issue template](https://github.com/WordPress/gutenberg/pull/13351) in GitHub to redirect help requests.
- Fix [wp-settings permissions](https://github.com/WordPress/gutenberg/pull/13539) in the local development environment.
- Use a filter to [populate the demo content](https://github.com/WordPress/gutenberg/pull/13553).

### Mobile
- Improve the [hide keyboard](https://github.com/WordPress/gutenberg/pull/13415) button.
- Add the [PostTitle](https://github.com/WordPress/gutenberg/pull/13199) component support.
- Support [Enter key press](https://github.com/WordPress/gutenberg/pull/13500) in the post title.
- Support [native Media Upload](https://github.com/WordPress/gutenberg/pull/13128).
- Support [undo/redo](https://github.com/WordPress/gutenberg/pull/13514) in the post title.
- Make the [InspectorControls](https://github.com/WordPress/gutenberg/pull/13597) available for mobile blocks.
- Add [failed media upload](https://github.com/WordPress/gutenberg/pull/13615) support and cancel buttons.
- Introduce the [BottomSheet](https://github.com/WordPress/gutenberg/pull/13612)  [component](https://github.com/WordPress/gutenberg/pull/13633).
