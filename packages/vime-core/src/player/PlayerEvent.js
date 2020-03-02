// Treeshaking safe.
const PlayerEvent = function () {};
PlayerEvent.READY = 'ready';
PlayerEvent.PLAYING = 'playing';
PlayerEvent.SEEKING = 'seeking';
PlayerEvent.SEEKED = 'seeked';
PlayerEvent.PLAYBACK_READY = 'playbackready';
PlayerEvent.PAUSE = 'pause';
PlayerEvent.PLAY = 'play';
PlayerEvent.LIVE = 'live';
PlayerEvent.REPLAY = 'replay';
PlayerEvent.ORIGIN_CHANGE = 'originchange';
PlayerEvent.ACTIVE_CHANGE = 'activechange';
PlayerEvent.SRC_CHANGE = 'srcchange';
PlayerEvent.CURRENT_SRC_CHANGE = 'currentsrcchange';
PlayerEvent.TRACKS_CHANGE = 'trackschange';
PlayerEvent.TRACK_CHANGE = 'trackchange';
PlayerEvent.PROVIDER_CHANGE = 'providerchange';
PlayerEvent.CUE_CHANGE = 'cuechange';
PlayerEvent.CAPTIONS_CHANGE = 'captionschange';
PlayerEvent.TITLE_CHANGE = 'titlechange';
PlayerEvent.DURATION_CHANGE = 'durationchange';
PlayerEvent.TIME_UPDATE = 'timeupdate';
PlayerEvent.PLAYBACK_START = 'playbackstart';
PlayerEvent.PLAYBACK_END = 'playbackend';
PlayerEvent.RATE_CHANGE = 'ratechange';
PlayerEvent.RATES_CHANGE = 'rateschange';
PlayerEvent.QUALITY_CHANGE = 'qualitychange';
PlayerEvent.QUALITIES_CHANGE = 'qualitieschange';
PlayerEvent.FULLSCREEN_CHANGE = 'fullscreenchange';
PlayerEvent.MEDIA_TYPE_CHANGE = 'mediatypechange';
PlayerEvent.VIEWING_MODE_CHANGE = 'viewingmodechange';
PlayerEvent.POSTER_CHANGE = 'posterchange';
PlayerEvent.STATE_CHANGE = 'statechange';
PlayerEvent.PIP_CHANGE = 'pipchange';
PlayerEvent.VOLUME_CHANGE = 'volumechange';
PlayerEvent.MUTE_CHANGE = 'mutechange';
PlayerEvent.BUFFERING = 'buffering';
PlayerEvent.BUFFERED = 'buffered';
PlayerEvent.REBUILD_START = 'rebuildstart';
PlayerEvent.REBUILD_END = 'rebuildend';
PlayerEvent.PROGRESS = 'progress';
PlayerEvent.ERROR = 'error';
export default PlayerEvent;